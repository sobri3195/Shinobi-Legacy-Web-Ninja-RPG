import { calculateDamage, applyStatusEffect, processStatusEffects, canUseJutsu } from './gameLogic'

export class BattleSystem {
  constructor(player, enemy) {
    this.player = { ...player, currentHp: player.maxHp, currentCp: player.maxCp }
    this.enemy = { ...enemy, currentHp: enemy.maxHp, currentCp: enemy.maxCp }
    this.turn = 1
    this.isPlayerTurn = this.player.speed >= this.enemy.speed
    this.battleLog = []
    this.winner = null
  }

  addLog(message, type = 'info') {
    this.battleLog.push({
      turn: this.turn,
      message,
      type,
      timestamp: Date.now()
    })
  }

  attack(attacker, defender, isPlayer) {
    const result = calculateDamage(attacker, defender)
    
    if (result.isEvaded) {
      this.addLog(
        `${isPlayer ? 'Kamu' : 'Musuh'} menyerang, tapi serangan ${isPlayer ? 'kamu' : 'itu'} dihindari!`,
        'evade'
      )
      return { ...result, attacker, defender }
    }

    defender.currentHp = Math.max(0, defender.currentHp - result.damage)

    let message = `${isPlayer ? 'Kamu' : 'Musuh'} menyerang dan memberikan ${result.damage} damage!`
    if (result.isCritical) {
      message += ' 💥 CRITICAL HIT!'
    }

    this.addLog(message, result.isCritical ? 'critical' : 'attack')

    return { ...result, attacker, defender }
  }

  useJutsu(attacker, defender, jutsu, isPlayer) {
    if (!canUseJutsu(attacker, jutsu)) {
      this.addLog(
        `${isPlayer ? 'Kamu' : 'Musuh'} tidak bisa menggunakan ${jutsu.name}!`,
        'error'
      )
      return null
    }

    attacker.currentCp -= jutsu.cost.cp

    if (jutsu.cost.cooldown) {
      attacker.cooldowns = attacker.cooldowns || {}
      attacker.cooldowns[jutsu.id] = jutsu.cost.cooldown
    }

    const result = calculateDamage(attacker, defender, jutsu)

    if (result.isEvaded) {
      this.addLog(
        `${isPlayer ? 'Kamu' : 'Musuh'} menggunakan ${jutsu.name}, tapi dihindari!`,
        'evade'
      )
      return { ...result, attacker, defender, jutsu }
    }

    defender.currentHp = Math.max(0, defender.currentHp - result.damage)

    let message = `${isPlayer ? 'Kamu' : 'Musuh'} menggunakan ${jutsu.name} dan memberikan ${result.damage} damage!`
    if (result.isCritical) {
      message += ' 💥 CRITICAL HIT!'
    }

    this.addLog(message, result.isCritical ? 'critical' : 'jutsu')

    if (jutsu.effects) {
      jutsu.effects.forEach(effect => {
        defender.statusEffects = applyStatusEffect(defender, effect)
        this.addLog(
          `${isPlayer ? 'Musuh' : 'Kamu'} terkena efek ${effect.type}!`,
          'status'
        )
      })
    }

    return { ...result, attacker, defender, jutsu }
  }

  defend(character, isPlayer) {
    character.defending = true
    this.addLog(`${isPlayer ? 'Kamu' : 'Musuh'} bertahan!`, 'defend')
  }

  useItem(character, item, isPlayer) {
    if (!item || !item.effects) return null

    item.effects.forEach(effect => {
      switch (effect.type) {
        case 'heal':
          character.currentHp = Math.min(character.maxHp, character.currentHp + effect.value)
          this.addLog(
            `${isPlayer ? 'Kamu' : 'Musuh'} menggunakan ${item.name} dan memulihkan ${effect.value} HP!`,
            'heal'
          )
          break
        case 'restore_cp':
          character.currentCp = Math.min(character.maxCp, character.currentCp + effect.value)
          this.addLog(
            `${isPlayer ? 'Kamu' : 'Musuh'} menggunakan ${item.name} dan memulihkan ${effect.value} CP!`,
            'heal'
          )
          break
        case 'cure':
          character.statusEffects = []
          this.addLog(
            `${isPlayer ? 'Kamu' : 'Musuh'} menggunakan ${item.name} dan sembuh dari semua status effect!`,
            'heal'
          )
          break
        default:
          break
      }
    })

    return character
  }

  processTurnEnd() {
    [
      { char: this.player, isPlayer: true },
      { char: this.enemy, isPlayer: false }
    ].forEach(({ char, isPlayer }) => {
      const statusResult = processStatusEffects(char)
      
      if (statusResult.damage > 0) {
        char.currentHp = Math.max(0, char.currentHp - statusResult.damage)
        this.addLog(
          `${isPlayer ? 'Kamu' : 'Musuh'} menerima ${statusResult.damage} damage dari status effect!`,
          'status_damage'
        )
      }

      char.statusEffects = statusResult.effects

      if (char.cooldowns) {
        Object.keys(char.cooldowns).forEach(jutsuId => {
          char.cooldowns[jutsuId] = Math.max(0, char.cooldowns[jutsuId] - 1)
        })
      }

      char.defending = false
    })

    this.turn += 1
  }

  checkBattleEnd() {
    if (this.player.currentHp <= 0) {
      this.winner = 'enemy'
      this.addLog('Kamu kalah dalam pertempuran!', 'defeat')
      return true
    }

    if (this.enemy.currentHp <= 0) {
      this.winner = 'player'
      this.addLog('Kamu menang dalam pertempuran!', 'victory')
      return true
    }

    return false
  }

  getState() {
    return {
      player: { ...this.player },
      enemy: { ...this.enemy },
      turn: this.turn,
      isPlayerTurn: this.isPlayerTurn,
      battleLog: [...this.battleLog],
      winner: this.winner
    }
  }
}

export const createAIAction = (enemy, player) => {
  const hpPercentage = enemy.currentHp / enemy.maxHp
  const cpPercentage = enemy.currentCp / enemy.maxCp

  if (hpPercentage < 0.3 && Math.random() < 0.3) {
    return { type: 'defend' }
  }

  if (cpPercentage > 0.4 && enemy.jutsu && enemy.jutsu.length > 0) {
    const availableJutsu = enemy.jutsu.filter(jutsu => canUseJutsu(enemy, jutsu))
    if (availableJutsu.length > 0 && Math.random() < 0.6) {
      const randomJutsu = availableJutsu[Math.floor(Math.random() * availableJutsu.length)]
      return { type: 'jutsu', jutsu: randomJutsu }
    }
  }

  return { type: 'attack' }
}

import { BASE_STATS, LEVEL_UP_MULTIPLIER, EXP_CURVE, ELEMENT_DATA, ELEMENT_WEAKNESS } from './constants'

export const calculateStats = (baseStats, level, element) => {
  const elementBonus = ELEMENT_DATA[element]?.bonus || {}
  
  return {
    maxHp: Math.floor((BASE_STATS.HP + (level - 1) * LEVEL_UP_MULTIPLIER.HP) * (elementBonus.hp || 1)),
    maxCp: Math.floor((BASE_STATS.CP + (level - 1) * LEVEL_UP_MULTIPLIER.CP)),
    attack: Math.floor((BASE_STATS.ATTACK + (level - 1) * LEVEL_UP_MULTIPLIER.ATTACK) * (elementBonus.attack || 1)),
    defense: Math.floor((BASE_STATS.DEFENSE + (level - 1) * LEVEL_UP_MULTIPLIER.DEFENSE) * (elementBonus.defense || 1)),
    speed: Math.floor((BASE_STATS.SPEED + (level - 1) * LEVEL_UP_MULTIPLIER.SPEED) * (elementBonus.speed || 1)),
    critical: BASE_STATS.CRITICAL * (elementBonus.critical || 1),
    evasion: BASE_STATS.EVASION * (elementBonus.evasion || 1)
  }
}

export const calculateExpForLevel = (level) => {
  return Math.floor(EXP_CURVE * Math.pow(level, 1.5))
}

export const calculateDamage = (attacker, defender, jutsu = null) => {
  let baseDamage = attacker.attack

  if (jutsu) {
    baseDamage = jutsu.power.base + (attacker.attack * jutsu.power.scaling)
  }

  const defense = defender.defense
  const damageReduction = defense / (defense + 100)
  let finalDamage = Math.floor(baseDamage * (1 - damageReduction))

  if (jutsu && jutsu.element) {
    const weakness = ELEMENT_WEAKNESS[defender.element]
    if (jutsu.element === weakness) {
      finalDamage = Math.floor(finalDamage * 1.5)
    } else if (jutsu.element === defender.element) {
      finalDamage = Math.floor(finalDamage * 0.7)
    }
  }

  const criticalChance = attacker.critical || 0.05
  const isCritical = Math.random() < criticalChance
  if (isCritical) {
    finalDamage = Math.floor(finalDamage * 2)
  }

  const evasionChance = defender.evasion || 0.05
  const isEvaded = Math.random() < evasionChance
  if (isEvaded) {
    finalDamage = 0
  }

  return {
    damage: Math.max(finalDamage, 0),
    isCritical,
    isEvaded
  }
}

export const applyStatusEffect = (target, effect) => {
  const effects = target.statusEffects || []
  
  const existingEffect = effects.find(e => e.type === effect.type)
  if (existingEffect) {
    existingEffect.duration = effect.duration
    existingEffect.value = effect.value
  } else {
    effects.push(effect)
  }

  return effects
}

export const processStatusEffects = (character) => {
  let damage = 0
  const effects = character.statusEffects || []
  const activeEffects = []

  effects.forEach(effect => {
    if (effect.duration > 0) {
      switch (effect.type) {
        case 'burn':
          damage += Math.floor(character.maxHp * 0.05)
          break
        case 'poison':
          damage += Math.floor(character.maxHp * 0.03)
          break
        default:
          break
      }
      
      effect.duration -= 1
      if (effect.duration > 0) {
        activeEffects.push(effect)
      }
    }
  })

  return {
    damage,
    effects: activeEffects
  }
}

export const canUseJutsu = (character, jutsu) => {
  if (!jutsu || !jutsu.cost) return false
  
  if (character.currentCp < jutsu.cost.cp) {
    return false
  }

  const cooldowns = character.cooldowns || {}
  if (cooldowns[jutsu.id] && cooldowns[jutsu.id] > 0) {
    return false
  }

  return true
}

export const getRandomItem = (itemPool, rarity = null) => {
  let pool = itemPool
  
  if (rarity) {
    pool = itemPool.filter(item => item.rarity === rarity)
  }

  if (pool.length === 0) return null

  const totalWeight = pool.reduce((sum, item) => sum + (item.dropRate || 1), 0)
  let random = Math.random() * totalWeight

  for (const item of pool) {
    random -= item.dropRate || 1
    if (random <= 0) {
      return { ...item }
    }
  }

  return pool[0]
}

export const calculateRewards = (mission) => {
  const baseGold = mission.rewards.gold
  const baseExp = mission.rewards.exp
  
  const goldVariance = Math.floor(baseGold * 0.2)
  const expVariance = Math.floor(baseExp * 0.1)

  return {
    gold: baseGold + Math.floor(Math.random() * goldVariance) - Math.floor(goldVariance / 2),
    exp: baseExp + Math.floor(Math.random() * expVariance),
    items: mission.rewards.items || []
  }
}

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const getElementColor = (element) => {
  return ELEMENT_DATA[element]?.color || '#FFFFFF'
}

export const getElementIcon = (element) => {
  return ELEMENT_DATA[element]?.icon || '❓'
}

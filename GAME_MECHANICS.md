# 🎮 Shinobi Legacy - Game Mechanics

Dokumentasi lengkap mengenai mekanik gameplay Shinobi Legacy.

---

## 📊 Sistem Statistik Karakter

### Base Stats

Setiap ninja memiliki 5 statistik utama:

| Stat | Deskripsi | Range | Formula |
|------|-----------|-------|---------|
| **HP (Health Points)** | Nyawa karakter | 100-9999 | `Base: 100 + (Level × 50) + (Endurance × 10)` |
| **CP (Chakra Points)** | Resource untuk jutsu | 50-5000 | `Base: 50 + (Level × 25) + (Spirit × 8)` |
| **ATK (Attack)** | Damage fisik | 10-999 | `Base: 10 + (Level × 5) + (Strength × 3)` |
| **DEF (Defense)** | Pengurangan damage | 5-500 | `Base: 5 + (Level × 3) + (Endurance × 2)` |
| **SPD (Speed)** | Turn order & evasion | 5-200 | `Base: 5 + (Level × 2) + (Agility × 1.5)` |

### Secondary Stats

| Stat | Deskripsi | Calculation |
|------|-----------|-------------|
| **Critical Rate** | Chance untuk critical hit | `Base 5% + (Luck × 0.5%)` |
| **Critical Damage** | Damage multiplier saat crit | `Base 150% + (Luck × 1%)` |
| **Evasion** | Chance untuk dodge attack | `(SPD ÷ 10) %` |
| **Accuracy** | Hit chance | `Base 95% - (Enemy Evasion)` |
| **HP Regen** | HP restored per turn | `(Max HP × 2%)` (out of combat) |
| **CP Regen** | CP restored per turn | `(Max CP × 5%)` (out of combat) |

---

## 🔥 Sistem Elemen

### Element Triangle (Rock-Paper-Scissors)

```
     🔥 Fire
    ↗  ↖  ↘
   ⚡      🌊
  ↗  ↖  ↗  ↘
🌪️ ← → 🌍
```

### Efektivitas Elemen

| Attacker | Defender | Damage Modifier |
|----------|----------|-----------------|
| 🔥 Fire | 🌪️ Wind | **+50%** (Super Effective) |
| 🌪️ Wind | ⚡ Thunder | **+50%** (Super Effective) |
| ⚡ Thunder | 🌍 Earth | **+50%** (Super Effective) |
| 🌍 Earth | 🌊 Water | **+50%** (Super Effective) |
| 🌊 Water | 🔥 Fire | **+50%** (Super Effective) |
| Opposite | Opposite | **-25%** (Not Effective) |
| Same | Same | **0%** (Neutral) |

### Element Passive Abilities

#### 🔥 Fire Element
- **Passive**: Burning Soul
  - +10% ATK
  - 20% chance to inflict **Burn** on hit
  - Immune to Burn status

#### 🌊 Water Element
- **Passive**: Flowing Spirit
  - +10% HP
  - +15% HP Regen
  - Reduced Burn duration by 50%

#### ⚡ Thunder Element
- **Passive**: Lightning Reflexes
  - +15% SPD
  - +10% Critical Rate
  - 15% chance to **Stun** on critical hit

#### 🌪️ Wind Element
- **Passive**: Swift Movement
  - +10% Evasion
  - +20% Combo Damage
  - First attack each battle is guaranteed hit

#### 🌍 Earth Element
- **Passive**: Stone Fortress
  - +15% DEF
  - +10% HP
  - Reduce critical damage taken by 30%

---

## ⚔️ Combat System

### Turn Order

1. Turn order ditentukan berdasarkan **SPD** stat
2. Character dengan SPD lebih tinggi mendapat turn pertama
3. Jika SPD sama, random

### Combat Actions

#### 1. Basic Attack
- **Cost**: 0 CP
- **Damage**: `ATK × (1.0 - Enemy DEF%)` 
- **Hit Rate**: 95%
- **Can combo**: Yes

#### 2. Jutsu
- **Cost**: Variable CP (10-100)
- **Damage**: Variable (Ninjutsu modifier)
- **Hit Rate**: Variable
- **Special Effects**: Yes
- **Cooldown**: Yes (1-5 turns)

#### 3. Defend
- **Effect**: +50% DEF for this turn
- **CP Regen**: +10 CP
- **Can't be skipped**: No

#### 4. Item
- **Effect**: Immediate item usage
- **No turn penalty**: Uses turn
- **Can be interrupted**: No

### Damage Calculation

```javascript
// Basic Attack Damage
baseDamage = Attacker.ATK - (Defender.DEF × 0.5)
elementModifier = getElementAdvantage(attackerElement, defenderElement)
criticalModifier = isCritical ? Attacker.CritDamage : 1.0
randomVariance = random(0.85, 1.15)

finalDamage = baseDamage × elementModifier × criticalModifier × randomVariance

// Jutsu Damage
jutsudamage = (Jutsu.basePower + (Attacker.ATK × Jutsu.atkScaling)) × elementModifier
```

### Status Effects

| Status | Icon | Duration | Effect |
|--------|------|----------|--------|
| **Burn** | 🔥 | 3 turns | `-5% Max HP` per turn |
| **Poison** | 💀 | 4 turns | `-3% Max HP` per turn |
| **Freeze** | ❄️ | 1 turn | Skip next turn |
| **Stun** | ⚡ | 1 turn | Cannot act |
| **Blind** | 👁️ | 2 turns | -50% Accuracy |
| **Shield** | 🛡️ | 2 turns | -30% Damage taken |
| **Strengthen** | 💪 | 3 turns | +30% ATK |
| **Weaken** | 😓 | 3 turns | -30% ATK |

---

## 💥 Jutsu System

### Jutsu Categories

#### Ninjutsu (Elemental)
- Element-based magical attacks
- High damage, moderate CP cost
- Can inflict status effects

#### Taijutsu (Physical)
- Physical combat techniques
- Moderate damage, low CP cost
- Can combo easily

#### Genjutsu (Illusion)
- Crowd control & debuffs
- Low damage, low CP cost
- High utility

#### Kekkei Genkai (Ultimate)
- Powerful unique techniques
- Very high damage, very high CP cost
- Long cooldown

### Jutsu Ranks

| Rank | Power Multiplier | CP Cost Range | Cooldown |
|------|------------------|---------------|----------|
| **E** | 1.0x | 10-20 | 1 turn |
| **D** | 1.5x | 20-30 | 2 turns |
| **C** | 2.0x | 30-45 | 3 turns |
| **B** | 2.5x | 45-60 | 4 turns |
| **A** | 3.0x | 60-80 | 5 turns |
| **S** | 4.0x | 80-100 | 6 turns |

### Learning Jutsu

- Unlock through **Level Up**
- Purchase from **Jutsu Scroll Shop**
- Reward from **Missions**
- Drop from **Boss Battles**

---

## 🎯 Leveling & Progression

### Experience Requirements

```javascript
// XP needed for next level
xpRequired = baseXP × (currentLevel ^ 1.5)

// Example:
Level 1 → 2: 100 XP
Level 2 → 3: 283 XP
Level 5 → 6: 1,118 XP
Level 10 → 11: 3,162 XP
Level 20 → 21: 8,944 XP
```

### XP Sources

| Source | XP Reward | Notes |
|--------|-----------|-------|
| Easy Mission | 50-100 | Low risk |
| Normal Mission | 150-300 | Balanced |
| Hard Mission | 400-600 | High challenge |
| Boss Battle | 800-1500 | Rare |
| PvP Win | 200-500 | Based on rank |
| Training | 20-50 | Daily limit |
| Daily Quest | 100-200 | Once per day |

### Level Up Rewards

Per level up:
- ✨ All stats increase by base amount
- 🎁 3 Skill Points
- ⚡ Full HP & CP restore
- 🎊 Random item (10% chance)
- 🔓 New jutsu unlock (every 5 levels)

---

## 🏹 Equipment System

### Equipment Slots

1. **Weapon** (Main Hand)
2. **Off-Hand** (Sub Weapon / Shield)
3. **Head Armor**
4. **Body Armor**
5. **Leg Armor**
6. **Boots**
7. **Accessory 1** (Ring/Necklace)
8. **Accessory 2** (Ring/Necklace)

### Rarity & Stats

| Rarity | Color | Stat Bonus | Special Effects |
|--------|-------|------------|-----------------|
| ⚪ Common | White | +5-10 | None |
| 🟢 Uncommon | Green | +10-20 | 1 bonus |
| 🔵 Rare | Blue | +20-35 | 2 bonuses |
| 🟣 Epic | Purple | +35-50 | 3 bonuses |
| 🟠 Legendary | Orange | +50-100 | 4 bonuses + unique effect |

### Enhancement System

- **Max Level**: +15
- **Success Rate**: Decreases per level
  - +1 to +5: 100%
  - +6 to +10: 70%
  - +11 to +15: 40%
- **Failure Penalty**: 
  - +1 to +10: Nothing
  - +11 to +15: Item destroyed (preventable with protection scroll)

---

## 💰 Economy System

### Currency Types

#### 💰 Gold (Primary)
- Earned from missions & battles
- Used for items, equipment, potions
- Can be traded between players

#### 💎 Gem (Premium)
- Earned from achievements & events
- Used for rare items & cosmetics
- Can be purchased with real money (future)

### Price Ranges

| Item Category | Gold Cost | Gem Cost |
|---------------|-----------|----------|
| Basic Potion | 50-100 | - |
| Rare Potion | 500-1000 | 10-20 |
| Common Equipment | 500-2000 | - |
| Rare Equipment | 5000-15000 | 50-150 |
| Epic Equipment | 30000-80000 | 300-800 |
| Jutsu Scroll (C) | 5000 | 50 |
| Jutsu Scroll (A) | 50000 | 500 |
| Cosmetic Item | - | 100-500 |

---

## 🏆 Achievement System

### Categories

1. **Combat Achievements**
   - Win X battles
   - Deal X damage in one hit
   - Survive with 1 HP
   - Perfect victory (no damage taken)

2. **Collection Achievements**
   - Collect X jutsu
   - Collect X equipment sets
   - Reach inventory cap

3. **Progression Achievements**
   - Reach level X
   - Complete all missions in area
   - Max out a stat

4. **Social Achievements**
   - Join a clan
   - Win X PvP matches
   - Trade X items

5. **Special Achievements**
   - Easter eggs
   - Secret locations
   - Hidden bosses

### Rewards

- 🏅 Title & Badge
- 💎 Gems
- 🎁 Exclusive items
- 🌟 Profile decorations

---

## 🎲 RNG & Drop Rates

### Mission Rewards

| Rarity | Drop Rate |
|--------|-----------|
| Common | 70% |
| Uncommon | 20% |
| Rare | 8% |
| Epic | 1.8% |
| Legendary | 0.2% |

### Boss Drop Rates

| Rarity | Drop Rate |
|--------|-----------|
| Common | 40% |
| Uncommon | 30% |
| Rare | 20% |
| Epic | 8% |
| Legendary | 2% |

---

## 🔮 Future Mechanics (Planned)

- **Combo System** - Chain attacks for bonus damage
- **Summon System** - Call creatures to aid in battle
- **Weather Effects** - Environment affects battle
- **Day/Night Cycle** - Time-based buffs
- **Crafting System** - Create custom items
- **Pet System** - Companion animals with abilities
- **Guild Wars** - Clan vs Clan battles
- **Raid Bosses** - Multiplayer boss fights

---

## 📚 References & Balance Notes

- All values are subject to change for balancing
- Check patch notes for latest updates
- Report bugs or balance issues on GitHub

---

**Last Updated**: 2024
**Version**: 1.0.0

[🔙 Back to README](README.md)

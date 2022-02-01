import sources from 'wow-tbc-classic-mats-calc/data/sources';
import reagents from 'wow-tbc-classic-mats-calc/data/reagents';

class Consumable {
  constructor (id, name, source, reagents) {
    this.id = id;
    this.name = name;
    this.source = source;
    this.reagents = reagents;
  }
}

export default {
  // tbc starts here --
  elixirOfMajorAgility: new Consumable(22831, 'Elixir of Major Agility', sources.alchemy, [
    { reagent: reagents.terocone, amount: 1 },
    { reagent: reagents.felweed, amount: 2 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorFortitude: new Consumable(32062, 'Elixir of Major Fortitude', sources.alchemy, [
    { reagent: reagents.ragveil, amount: 2 },
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfFortification: new Consumable(22851, 'Flask of Fortification', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.ancientLichen, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  ironshieldPotion: new Consumable(22849, 'Ironshield Potion', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 2 },
    { reagent: reagents.moteOfEarth, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  heroicPotion: new Consumable(22837, 'Heroic Potion', sources.alchemy, [
    { reagent: reagents.terocone, amount: 2 },
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfRelentlessAssault: new Consumable(22854, 'Flask of Relentless Assault', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.terocone, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  hastePotion: new Consumable(22838, 'Haste Potion', sources.alchemy, [
    { reagent: reagents.terocone, amount: 2 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  insaneStrengthPotion: new Consumable(22828, 'Insane Strength Potion', sources.alchemy, [
    { reagent: reagents.terocone, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfPureDeath: new Consumable(22866, 'Flask of Pure Death', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.nightmareVine, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorShadowPower: new Consumable(22835, 'Elixir of Major Shadow Power', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.nightmareVine, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfDraenicWisdom: new Consumable(32067, 'Elixir of Draenic Wisdom', sources.alchemy, [
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.terocone, amount: 1 }
  ]),
  destructionPotion: new Consumable(22839, 'Destruction Potion', sources.alchemy, [
    { reagent: reagents.nightmareVine, amount: 2 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  superManaPotion: new Consumable(22832, 'Super Mana Potion', sources.alchemy, [
    { reagent: reagents.dreamingGlory, amount: 2 },
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfHealingPower: new Consumable(22825, 'Elixir of Healing Power', sources.alchemy, [
    { reagent: reagents.goldenSansam, amount: 1 },
    { reagent: reagents.dreamingGlory, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfMightyRestoration: new Consumable(22853, 'Flask of Mighty Restoration', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.dreamingGlory, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  majorDreamlessSleepPotion: new Consumable(22836, 'Major Dreamless Sleep Potion', sources.alchemy, [
    { reagent: reagents.dreamingGlory, amount: 1 },
    { reagent: reagents.nightmareVine, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorMageblood: new Consumable(22840, 'Elixir of Major Mageblood', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfBlindingLight: new Consumable(22861, 'Flask of Blinding Light', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 },
    { reagent: reagents.netherbloom, amount: 7 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  flaskOfChromaticWonder: new Consumable(33208, 'Flask of Chromatic Wonder', sources.alchemy, [
    { reagent: reagents.felLotus, amount: 1 },
    { reagent: reagents.dreamingGlory, amount: 7 },
    { reagent: reagents.netherbloom, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  adeptsElixir: new Consumable(28103, 'Adept\'s Elixir', sources.alchemy, [
    { reagent: reagents.dreamfoil, amount: 1 },
    { reagent: reagents.felweed, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorFrostPower: new Consumable(22827, 'Elixir of Major Frost Power', sources.alchemy, [
    { reagent: reagents.moteOfWater, amount: 2 },
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorFirepower: new Consumable(22833, 'Elixir of Major Firepower', sources.alchemy, [
    { reagent: reagents.moteOfFire, amount: 2 },
    { reagent: reagents.ancientLichen, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  elixirOfMajorDefense: new Consumable(22834, 'Elixir of Major Defense', sources.alchemy, [
    { reagent: reagents.ancientLichen, amount: 3 },
    { reagent: reagents.terocone, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  adamantiteSharpeningStone: new Consumable(23529, 'Adamantite Sharpening Stone', sources.blacksmithing, [
    { reagent: reagents.adamantiteBar, amount: 1 },
    { reagent: reagents.moteOfEarth, amount: 2 }
  ]),
  adamantiteWeightstone: new Consumable(28421, 'Adamantite Weightstone', sources.blacksmithing, [
    { reagent: reagents.adamantiteBar, amount: 1 },
    { reagent: reagents.netherweaveCloth, amount: 2 }
  ]),
  greaterWardOfShielding: new Consumable(23576, 'Greater Ward of Shielding', sources.blacksmithing, [
    { reagent: reagents.eterniumBar, amount: 1 }
  ]),
  fishermansFeast: new Consumable(33052, 'Fisherman\'s Feast', sources.cooking, [
    { reagent: reagents.hugeSpottedFeltail, amount: 1 },
    { reagent: reagents.goldenbarkApple, amount: 5 },
    { reagent: reagents.soothingSpices, amount: 5 }
  ]),
  spicyCrawdad: new Consumable(27667, 'Spicy Crawdad', sources.cooking, [
    { reagent: reagents.furiousCrawdad, amount: 1 }
  ]),
  grilledMudfish: new Consumable(27664, 'Grilled Mudfish', sources.cooking, [
    { reagent: reagents.figlustersMudfish, amount: 1 }
  ]),
  warpBurger: new Consumable(27659, 'Warp Burger', sources.cooking, [
    { reagent: reagents.warpedFlesh, amount: 1 }
  ]),
  spicyHotTalbuk: new Consumable(33872, 'Spicy Hot Talbuk', sources.cooking, [
    { reagent: reagents.talbulkVenison, amount: 1 },
    { reagent: reagents.hotSpices, amount: 1 }
  ]),
  roastedClefthoof: new Consumable(27658, 'Roasted Clefthoof', sources.cooking, [
    { reagent: reagents.clefthoofMeat, amount: 1 }
  ]),
  ravagerDog: new Consumable(27655, 'Ravager Dog', sources.cooking, [
    { reagent: reagents.ravagerFlesh, amount: 1 }
  ]),
  blackenedBasilisk: new Consumable(27657, 'Blackened Basilisk', sources.cooking, [
    { reagent: reagents.chunkOBasilisk, amount: 1 }
  ]),
  crunchySerpent: new Consumable(31673, 'Crunchy Serpent', sources.cooking, [
    { reagent: reagents.serpentFlesh, amount: 1 }
  ]),
  poachedBluefish: new Consumable(27665, 'Poached Bluefish', sources.cooking, [
    { reagent: reagents.icefinBluefish, amount: 1 }
  ]),
  skullfishSoup: new Consumable(33825, 'Skullfish Soup', sources.cooking, [
    { reagent: reagents.crescentTailSkullfish, amount: 1 }
  ]),
  juicyBearBurger: new Consumable(35565, 'Juicy Bear Burger', sources.cooking, [
    { reagent: reagents.bearFlank, amount: 1 }
  ]),
  goldenFishSticks: new Consumable(27666, 'Golden Fish Sticks', sources.cooking, [
    { reagent: reagents.goldenDarter, amount: 1 }
  ]),
  kiblersBits: new Consumable(33874, 'Kibler\'s Bits', sources.cooking, [
    { reagent: reagents.buzzardMeat, amount: 1 }
  ]),
  sporelingSnack: new Consumable(27656, 'Sporeling Snack', sources.cooking, [
    { reagent: reagents.strangeSpores, amount: 1 }
  ]),
  brilliantWizardOil: new Consumable(20749, 'Brilliant Wizard Oil', sources.enchanting, [
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.firebloom, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  superiorWizardOil: new Consumable(22522, 'Superior Wizard Oil', sources.enchanting, [
    { reagent: reagents.arcaneDust, amount: 3 },
    { reagent: reagents.nightmareVine, amount: 118256 }
  ]),
  brilliantManaOil: new Consumable(20748, 'Brilliant Mana Oil', sources.enchanting, [
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.purpleLotus, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  superiorManaOil: new Consumable(22521, 'Superior Mana Oil', sources.enchanting, [
    { reagent: reagents.arcaneDust, amount: 3 },
    { reagent: reagents.netherbloom, amount: 1 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),

  arcaneCauldron: new Consumable(32839, 'Cauldron of Major Arcane Protection', sources.alchemy, [
    { reagent: reagents.felIronCasing, amount: 1 },
    { reagent: reagents.primalMana, amount: 2 },
    { reagent: reagents.manaThistle, amount: 7 }
  ]),
  fireCauldron: new Consumable(32849, 'Cauldron of Major Fire Protection', sources.alchemy, [
    { reagent: reagents.felIronCasing, amount: 1 },
    { reagent: reagents.primalFire, amount: 2 },
    { reagent: reagents.manaThistle, amount: 7 }
  ]),
  frostCauldron: new Consumable(32850, 'Cauldron of Major Frost Protection', sources.alchemy, [
    { reagent: reagents.felIronCasing, amount: 1 },
    { reagent: reagents.primalWater, amount: 2 },
    { reagent: reagents.manaThistle, amount: 7 }
  ]),
  natureCauldron: new Consumable(32851, 'Cauldron of Major Nature Protection', sources.alchemy, [
    { reagent: reagents.felIronCasing, amount: 1 },
    { reagent: reagents.primalLife, amount: 2 },
    { reagent: reagents.manaThistle, amount: 7 }
  ]),
  shadowCauldron: new Consumable(32852, 'Cauldron of Major Shadow Protection', sources.alchemy, [
    { reagent: reagents.felIronCasing, amount: 1 },
    { reagent: reagents.primalShadow, amount: 2 },
    { reagent: reagents.manaThistle, amount: 7 }
  ]),  
  SPACER_MISC: new Consumable(0, '-- -- Misc Common Consumes -- --', sources.alchemy, [
    {  },
  ]),
  SPACER_FLASK: new Consumable(0, '-- -- -- Flasks -- -- --', sources.alchemy, [
    {  },
  ]),
  SPACER_FOOD: new Consumable(0, '-- -- -- Food and Pet Buffs -- -- --', sources.alchemy, [
    {  },
  ]),
  SPACER_CLASSIC: new Consumable(0, '-- Vanilla Consumes (Likely irrelevant) --', sources.alchemy, [
    {  },
  ]),
  SPACER_PROTECTION: new Consumable(0, '-- -- -- Elemental Protections -- -- --', sources.alchemy, [
    {  },
  ]),
  SPACER_ENGI: new Consumable(0, '-- -- -- Engineering -- -- --', sources.alchemy, [
    {  },
  ]),
  SPACER_SUB_COMP: new Consumable(0, '-- -- -- Sub-Components -- -- --', sources.alchemy, [
    {  },
  ]),
  sapperCharge: new Consumable(10646, 'Goblin Sapper Charge (1)', sources.engineering, [
    { reagent: reagents.mageweaveCloth, amount: 1 },
    { reagent: reagents.solidBlastingPowder, amount: 3 },
    { reagent: reagents.unstableTrigger, amount: 1 }
  ]),
  superSapper: new Consumable(23827, 'Super Sapper Charge (2)', sources.engineering, [
    { reagent: reagents.netherweaveCloth, amount: 4 },
    { reagent: reagents.elementalBlastingPowder, amount: 1 },
    { reagent: reagents.primalMana, amount: 1 }
  ]),
  felIronBomb: new Consumable(23736, 'Fel Iron Bomb (4)', sources.engineering, [
    { reagent: reagents.felIronCasing, amount: 1 },
    { reagent: reagents.felIronBolts, amount: 2 },
    { reagent: reagents.elementalBlastingPowder, amount: 1 }
  ]),
  arcaneBomb: new Consumable(16040, 'Arcane Bomb (3)', sources.engineering, [
    { reagent: reagents.delicateArcaniteConverter, amount: 1 },
    { reagent: reagents.thoriumBar, amount: 3 },
    { reagent: reagents.runecloth, amount: 1 }
  ]),
  goblinLandmine: new Consumable(4395, 'Goblin Land Mine (1)', sources.engineering, [
    { reagent: reagents.heavyBlastingPowder, amount: 3 },
    { reagent: reagents.ironBar, amount: 2 },
    { reagent: reagents.gyrochronatom, amount: 1 }
  ]),
  adamantiteGrenade: new Consumable(23737, 'Adamantite Grenade (3)', sources.engineering, [
    { reagent: reagents.adamantiteBar, amount: 4 },
    { reagent: reagents.felIronBolts, amount: 2 },
    { reagent: reagents.elementalBlastingPowder, amount: 1 }
  ]),
  repairBot: new Consumable(34113, 'Field Repair Bot 110G (5)', sources.engineering, [
    { reagent: reagents.adamantiteBar, amount: 8 },
    { reagent: reagents.felIronBolts, amount: 8 },
    { reagent: reagents.khoriumPowerCore, amount: 1 }
  ]),
//subcomps
  unstableTrig: new Consumable(10560, 'Unstable Trigger', sources.engineering, [
    { reagent: reagents.mithrilBar, amount: 1 },
    { reagent: reagents.mageweaveCloth, amount: 1 },
    { reagent: reagents.solidBlastingPowder, amount: 1 }
  ]),
  eleBlastPowder: new Consumable(23781, 'Elemental Blasting Powder (4)', sources.engineering, [
    { reagent: reagents.moteOfFire, amount: 1 },
    { reagent: reagents.moteOfEarth, amount: 2 }
  ]),
  solidBlastPowder: new Consumable(10505, 'Solid Blasting Powder', sources.engineering, [
    { reagent: reagents.solidStone, amount: 2 }
  ]),
  heavyBlastPowder: new Consumable(4377, 'Heavy Blasting Powder', sources.engineering, [
    { reagent: reagents.heavyStone, amount: 1 }
  ]),
  felICasing: new Consumable(23782, 'Fel Iron Casing', sources.engineering, [
    { reagent: reagents.felIronBar, amount: 3 }
  ]),
  felIBolts: new Consumable(23783, '(Handful of) Fel Iron Bolts', sources.engineering, [
    { reagent: reagents.felIronBar, amount: 1 }
  ]),
  gyroThing: new Consumable(4389, 'Gyrochronatom', sources.engineering, [
    { reagent: reagents.ironBar, amount: 1 },
    { reagent: reagents.goldPowerCore, amount: 1 }
  ]),
  khoriumPwrCore: new Consumable(23786, 'Khorium Power Core', sources.engineering, [
    { reagent: reagents.khoriumBar, amount: 3 },
    { reagent: reagents.primalFire, amount: 1 }
  ]),
  goldPwrCore: new Consumable(10558, 'Gold Power Core (3)', sources.engineering, [
    { reagent: reagents.goldBar, amount: 1 }
  ]),
  delicateArcConv: new Consumable(16006, 'Delicate Arcanite Converter', sources.engineering, [
    { reagent: reagents.arcaniteBar, amount: 1 },
    { reagent: reagents.ironwebSpiderSilk, amount: 1 }
  ]),
  // classic starts here (with a few interjections)
  elixirOfGiants: new Consumable(9206, 'Elixir of Giants', sources.alchemy, [
    { reagent: reagents.sungrass, amount: 1 },
    { reagent: reagents.gromsblood, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  elixirOfTheMongoose: new Consumable(13452, 'Elixir of the Mongoose', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.mountainSilversage, amount: 2 },
    { reagent: reagents.plaguebloom, amount: 2 }
  ]),
  elixirOfGreaterAgility: new Consumable(9187, 'Elixir of Greater Agility', sources.alchemy, [
    { reagent: reagents.sungrass, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),

  majorArcaneProtectionPotion: new Consumable(22845, 'Major Arcane Protection Potion', sources.alchemy, [
    { reagent: reagents.imbuedVial, amount: 5 },
    { reagent: reagents.primalMana, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 }
  ]),
  greaterArcaneProtectionPotion: new Consumable(13461, 'Greater Arcane Protection Potion', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamDust, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),  
  majorFireProtectionPotion: new Consumable(28571, 'Major Fire Protection Potion', sources.alchemy, [
    { reagent: reagents.imbuedVial, amount: 5 },
    { reagent: reagents.primalFire, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 }
  ]),
  greaterFireProtectionPotion: new Consumable(13457, 'Greater Fire Protection Potion', sources.alchemy, [
    { reagent: reagents.elementalFire, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  majorFrostProtectionPotion: new Consumable(22846, 'Major Frost Protection Potion', sources.alchemy, [
    { reagent: reagents.imbuedVial, amount: 5 },
    { reagent: reagents.primalWater, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 }
  ]),
  greaterFrostProtectionPotion: new Consumable(13456, 'Greater Frost Protection Potion', sources.alchemy, [
    { reagent: reagents.elementalWater, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  frostProtectionPotion: new Consumable(6050, 'Frost Protection Potion', sources.alchemy, [
    { reagent: reagents.wintersBite, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  majorNatureProtectionPotion: new Consumable(28573, 'Major Nature Protection Potion', sources.alchemy, [
    { reagent: reagents.imbuedVial, amount: 5 },
    { reagent: reagents.primalLife, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 }
  ]),
  greaterNatureProtectionPotion: new Consumable(13458, 'Greater Nature Protection Potion', sources.alchemy, [
    { reagent: reagents.elementalEarth, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),
  natureProtectionPotion: new Consumable(6052, 'Nature Protection Potion', sources.alchemy, [
    { reagent: reagents.liferoot, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.stranglekelp, amount: 1 }
  ]),
  majorShadowProtectionPotion: new Consumable(22846, 'Major Shadow Protection Potion', sources.alchemy, [
    { reagent: reagents.imbuedVial, amount: 5 },
    { reagent: reagents.primalShadow, amount: 1 },
    { reagent: reagents.manaThistle, amount: 3 }
  ]),
  greaterShadowProtectionPotion: new Consumable(13459, 'Greater Shadow Protection Potion', sources.alchemy, [
    { reagent: reagents.graveMoss, amount: 4 },
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.fadeleaf, amount: 4 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 1 }
  ]),

  elixirOfPoisonResistance: new Consumable(3386, 'Elixir of Poison Resistance', sources.alchemy, [
    { reagent: reagents.largeVenomSac, amount: 1 },
    { reagent: reagents.bruiseweed, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  restorativePotion: new Consumable(9030, 'Restorative Potion', sources.alchemy, [
    { reagent: reagents.elementalEarth, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  antiVenom: new Consumable(6452, 'Anti-Venom', sources.firstaid, [
    { reagent: reagents.smallVenomSac, amount: 1 }
  ]),
  strongAntiVenom: new Consumable(6453, 'Strong Anti-Venom', sources.firstaid, [
    { reagent: reagents.largeVenomSac, amount: 1 }
  ]),
  powerfulAntiVenom: new Consumable(19440, 'Powerful Anti-Venom', sources.firstaid, [
    { reagent: reagents.hugeVenomSac, amount: 1 }
  ]),

  greaterStoneshieldPotion: new Consumable(13455, 'Greater Stoneshield Potion', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 3 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.thoriumOre, amount: 1 },
    { reagent: reagents.stonescaleEel, amount: 3 }
  ]),
  lesserStoneshieldPotion: new Consumable(4623, 'Lesser Stoneshield Potion', sources.alchemy, [
    { reagent: reagents.mithrilOre, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  elixirOfSuperiorDefense: new Consumable(13445, 'Elixir of Superior Defense', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 2 },
    { reagent: reagents.sungrass, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.stonescaleEel, amount: 2 }
  ]),
  elixirOfGreaterDefense: new Consumable(8951, 'Elixir of Greater Defense', sources.alchemy, [
    { reagent: reagents.wildSteelbloom, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
  ]),

  elementalSharpeningStone: new Consumable(18262, 'Elemental Sharpening Stone', sources.blacksmithing, [
    { reagent: reagents.elementalEarth, amount: 2 },
    { reagent: reagents.denseStone, amount: 3 }
  ]),
  denseSharpeningStone: new Consumable(12404, 'Dense Sharpening Stone', sources.blacksmithing, [
    { reagent: reagents.denseStone, amount: 1 }
  ]),
  denseWeightstone: new Consumable(12643, 'Dense Weightstone', sources.blacksmithing, [
    { reagent: reagents.denseStone, amount: 1 },
    { reagent: reagents.runecloth, amount: 1 }
  ]),
  frostOil: new Consumable(3829, 'Frost Oil', sources.alchemy, [
    { reagent: reagents.khadgarsWhisker, amount: 4 },
    { reagent: reagents.wintersBite, amount: 2 },
    { reagent: reagents.leadedVial, amount: 1 },
  ]),
  brilliantManaOil: new Consumable(20748, 'Brilliant Mana Oil', sources.enchanting, [
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.purpleLotus, amount: 3 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  lesserManaOil: new Consumable(20747, 'Lesser Mana Oil', sources.enchanting, [
    { reagent: reagents.dreamDust, amount: 3 },
    { reagent: reagents.purpleLotus, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 },
  ]),
  brilliantWizardOil: new Consumable(20749, 'Brilliant Wizard Oil', sources.enchanting, [
    { reagent: reagents.firebloom, amount: 3 },
    { reagent: reagents.largeBrilliantShard, amount: 2 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),
  wizardOil: new Consumable(20750, 'Wizard Oil', sources.enchanting, [
    { reagent: reagents.illusionDust, amount: 3 },
    { reagent: reagents.firebloom, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 },
  ]),

  majorManaPotion: new Consumable(13444, 'Major Mana Potion', sources.alchemy, [
    { reagent: reagents.dreamfoil, amount: 3 },
    { reagent: reagents.icecap, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  majorHealingPotion: new Consumable(13446, 'Major Healing Potion', sources.alchemy, [
    { reagent: reagents.goldenSansam, amount: 2 },
    { reagent: reagents.mountainSilversage, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  majorRejuvenationPotion: new Consumable(18253, 'Major Rejuvenation Potion', sources.alchemy, [
    { reagent: reagents.heartOfTheWild, amount: 1 },
    { reagent: reagents.goldenSansam, amount: 4 },
    { reagent: reagents.dreamfoil, amount: 4 },
    { reagent: reagents.imbuedVial, amount: 1 }
  ]),

  greaterArcaneElixir: new Consumable(13454, 'Greater Arcane Elixir', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 3 },
    { reagent: reagents.mountainSilversage, amount: 1 }
  ]),
  arcaneElixir: new Consumable(9155, 'Arcane Elixir', sources.alchemy, [
    { reagent: reagents.blindweed, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  elixirOfGreaterFirepower: new Consumable(21546, 'Elixir of Greater Firepower', sources.alchemy, [
    { reagent: reagents.emptyVial, amount: 3 },
    { reagent: reagents.firebloom, amount: 3 },
    { reagent: reagents.firefinSnapper, amount: 6 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  elixirOfShadowPower: new Consumable(9264, 'Elixir of Shadow Power', sources.alchemy, [
    { reagent: reagents.ghostMushroom, amount: 3 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),

  limitedInvulnerabilityPotion: new Consumable(3387, 'Limited Invulnerability Potion', sources.alchemy, [
    { reagent: reagents.blindweed, amount: 2 },
    { reagent: reagents.ghostMushroom, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  freeActionPotion: new Consumable(5634, 'Free Action Potion', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.stranglekelp, amount: 1 },
    { reagent: reagents.oilyBlackmouth, amount: 4 },
    { reagent: reagents.emptyVial, amount: 2 }
  ]),
  giftOfArthas: new Consumable(9088, 'Gift of Arthas', sources.alchemy, [
    { reagent: reagents.arthasTears, amount: 1 },
    { reagent: reagents.blindweed, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),
  swiftnessPotion: new Consumable(2459, 'Swiftness Potion', sources.alchemy, [
    { reagent: reagents.briarthorn, amount: 1 },
    { reagent: reagents.swiftthistle, amount: 1 },
    { reagent: reagents.emptyVial, amount: 1 }
  ]),
  mightyRagePotion: new Consumable(13442, 'Mighty Rage Potion', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.gromsblood, amount: 3 }
  ]),
  elixirOfFortitude: new Consumable(3825, 'Elixir of Fortitude', sources.alchemy, [
    { reagent: reagents.wildSteelbloom, amount: 1 },
    { reagent: reagents.goldthorn, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 }
  ]),
  majorTrollsBloodPotion: new Consumable(20004, 'Major Troll\'s Blood Potion', sources.alchemy, [
    { reagent: reagents.gromsblood, amount: 1 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.plaguebloom, amount: 2 }
  ]),
  mightyTrollsBloodPotion: new Consumable(3826, 'Mighty Troll\'s Blood Potion', sources.alchemy, [
    { reagent: reagents.liferoot, amount: 1 },
    { reagent: reagents.bruiseweed, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
  ]),
  magebloodPotion: new Consumable(20007, 'Mageblood Potion', sources.alchemy, [
    { reagent: reagents.dreamfoil, amount: 1 },
    { reagent: reagents.plaguebloom, amount: 2 },
    { reagent: reagents.crystalVial, amount: 1 }
  ]),

  smokedDesertDumplings: new Consumable(20452, 'Smoked Desert Dumplings', sources.cooking, [
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.sandwormMeat, amount: 1 }
  ]),
  dirgesKickinChimaerokChops: new Consumable(21023, 'Dirge\'s Kickin\' Chimaerok Chops', sources.cooking, [
    { reagent: reagents.hotSpices, amount: 1 },
    { reagent: reagents.leadedVial, amount: 1 },
    { reagent: reagents.firebloom, amount: 1 },
    { reagent: reagents.deeprockSalt, amount: 1 },
    { reagent: reagents.volatileRum, amount: 1 },
    { reagent: reagents.chimaerokTenderloin, amount: 1 }
  ]),
  grilledSquid: new Consumable(13928, 'Grilled Squid', sources.cooking, [
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.winterSquid, amount: 1 }
  ]),
  runnTumTuberSurprise: new Consumable(18254, 'Runn Tum Tuber Surprise', sources.cooking, [
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.runnTumTuber, amount: 1 }
  ]),
  spicedChiliCrab: new Consumable(12216, 'Spiced Chili Crab', sources.cooking, [
    { reagent: reagents.tenderCrabMeat, amount: 1 },
    { reagent: reagents.hotSpices, amount: 2 },
  ]),
  monsterOmelet: new Consumable(12218, 'Monster Omelet', sources.cooking, [
    { reagent: reagents.giantEgg, amount: 1 },
    { reagent: reagents.soothingSpices, amount: 2 },
  ]),
  tenderWolfSteak: new Consumable(18045, 'Tender Wolf Steak', sources.cooking, [
    { reagent: reagents.tenderWolfMeat, amount: 1 },
    { reagent: reagents.soothingSpices, amount: 1 },
  ]),
  heavyKodoStew: new Consumable(12215, 'Heavy Kodo Stew', sources.cooking, [
    { reagent: reagents.heavyKodoMeat, amount: 2 },
    { reagent: reagents.soothingSpices, amount: 1 },
    { reagent: reagents.refreshingSpringWater, amount: 1 },
  ]),
  spiderSausage: new Consumable(17222, 'Spider Sausage', sources.cooking, [
    { reagent: reagents.whiteSpiderMeat, amount: 2 },
  ]),

  nightfinSoup: new Consumable(13931, 'Nightfin Soup', sources.cooking, [
    { reagent: reagents.refreshingSpringWater, amount: 1 },
    { reagent: reagents.rawNightfinSnapper, amount: 1 }
  ]),
  sagefishDelight: new Consumable(21217, 'Sagefish Delight', sources.cooking, [
    { reagent: reagents.hotSpices, amount: 1 },
    { reagent: reagents.rawGreaterSagefish, amount: 1 }
  ]),
  poachedSunscaleSalmon: new Consumable(13932, 'Poached Sunscale Salmon', sources.cooking, [
    { reagent: reagents.rawSunscaleSalmon, amount: 1 },
  ]),

  flaskOfTheTitans: new Consumable(13510, 'Flask of the Titans', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 10 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.gromsblood, amount: 30 },
    { reagent: reagents.stonescaleEel, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfSupremePower: new Consumable(13512, 'Flask of Supreme Power', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 30 },
    { reagent: reagents.mountainSilversage, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfDistilledWisdom: new Consumable(13511, 'Flask of Distilled Wisdom', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.dreamfoil, amount: 30 },
    { reagent: reagents.icecap, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfPetrification: new Consumable(13506, 'Flask of Petrification', sources.alchemy, [
    { reagent: reagents.leadedVial, amount: 30 },
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.stonescaleEel, amount: 30 },
    { reagent: reagents.mountainSilversage, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),
  flaskOfChromaticResistance: new Consumable(13513, 'Flask of Chromatic Resistance', sources.alchemy, [
    { reagent: reagents.crystalVial, amount: 1 },
    { reagent: reagents.icecap, amount: 30 },
    { reagent: reagents.mountainSilversage, amount: 10 },
    { reagent: reagents.blackLotus, amount: 1 }
  ]),

  roids: new Consumable(8410, 'R.O.I.D.S.', sources.quest, [
    { reagent: reagents.snickerfangJowl, amount: 3 },
    { reagent: reagents.blastedBoarLung, amount: 2 },
    { reagent: reagents.scorpokPincer, amount: 1 },
  ]),
  lungJuiceCocktail: new Consumable(8411, 'Lung Juice Cocktail', sources.quest, [
    { reagent: reagents.blastedBoarLung, amount: 3 },
    { reagent: reagents.scorpokPincer, amount: 2 },
    { reagent: reagents.basiliskBrain, amount: 1 },
  ]),
  groundScorpokAssay: new Consumable(8412, 'Ground Scorpok Assay', sources.quest, [
    { reagent: reagents.scorpokPincer, amount: 3 },
    { reagent: reagents.vultureGizzard, amount: 2 },
    { reagent: reagents.blastedBoarLung, amount: 1 },
  ]),
  cerebralCortexCompound: new Consumable(8423, 'Cerebral Cortex Compound', sources.quest, [
    { reagent: reagents.basiliskBrain, amount: 10 },
    { reagent: reagents.vultureGizzard, amount: 2 },
  ]),
  // 
};

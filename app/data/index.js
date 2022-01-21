import { tracked } from '@glimmer/tracking';
import store from 'store2';
import consumables from 'wow-tbc-classic-mats-calc/data/consumables';

class Craftable {
  @tracked amount;
  @tracked hidden;

  constructor (item, amount, { hidden }) {
    this.item = item;
    const saved = this.load();

    this.amount = saved?.amount ?? Number(amount);
    this.hidden = saved?.hidden ?? Boolean(hidden);
  }

  load () {
    return store.get(`craft_${this.item.id}`);
  }

  persist () {
    store.set(`craft_${this.item.id}`, {
      amount: this.amount,
      hidden: this.hidden
    });
  }

  hide () {
    this.hidden = true;
    this.persist();
  }

  show () {
    this.hidden = false;
    this.persist();
  }

  setAmount (amount = 0) {
    this.amount = Number(amount);
    this.persist();
  }
}

export default [
  // TBC SECTION --
  // Util Pots
  new Craftable(consumables.heroicPotion, 0, { hidden: false }),
  new Craftable(consumables.hastePotion, 0, { hidden: false }),
  new Craftable(consumables.insaneStrengthPotion, 0, { hidden: false }),
  new Craftable(consumables.destructionPotion, 0, { hidden: false }),
  new Craftable(consumables.ironshieldPotion, 0, { hidden: false }),

  // Battle Elixir
  new Craftable(consumables.elixirOfMajorAgility, 0, { hidden: false }),
  new Craftable(consumables.adeptsElixir, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorShadowPower, 0, { hidden: true }),
  new Craftable(consumables.elixirOfMajorFrostPower, 0, { hidden: true }),
  new Craftable(consumables.elixirOfMajorFirepower, 0, { hidden: true }),

  // Guardian Elixir
  new Craftable(consumables.elixirOfMajorDefense, 0, { hidden: false }),
  new Craftable(consumables.elixirOfDraenicWisdom, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorFortitude, 0, { hidden: false }),
  new Craftable(consumables.elixirOfMajorMageblood, 0, { hidden: false }),

  // Flask
  new Craftable(consumables.SPACER_FLASK, 0, { hidden: false }),
  new Craftable(consumables.flaskOfFortification, 0, { hidden: true }),
  new Craftable(consumables.flaskOfRelentlessAssault, 0, { hidden: false }),
  new Craftable(consumables.flaskOfPureDeath, 0, { hidden: false }),
  new Craftable(consumables.flaskOfMightyRestoration, 0, { hidden: true }),
  new Craftable(consumables.flaskOfBlindingLight, 0, { hidden: false }),
  new Craftable(consumables.flaskOfChromaticWonder, 0, { hidden: false }),
  // Classic Flasks
  new Craftable(consumables.flaskOfTheTitans, 0, { hidden: true }),
  new Craftable(consumables.flaskOfSupremePower, 0, { hidden: false }),
  new Craftable(consumables.flaskOfDistilledWisdom, 0, { hidden: false }),
  new Craftable(consumables.flaskOfPetrification, 0, { hidden: true }),
  new Craftable(consumables.flaskOfChromaticResistance, 0, { hidden: true }),

  // Restoration
  new Craftable(consumables.SPACER_MISC, 0, { hidden: false }),
  new Craftable(consumables.superManaPotion, 0, { hidden: false }),
  new Craftable(consumables.elixirOfHealingPower, 0, { hidden: false }),
  new Craftable(consumables.majorDreamlessSleepPotion, 0, { hidden: true }),

  // Weapon
  new Craftable(consumables.superiorWizardOil, 0, { hidden: false }),
  new Craftable(consumables.brilliantWizardOil, 0, { hidden: false }),
  new Craftable(consumables.superiorManaOil, 0, { hidden: false }),
  new Craftable(consumables.brilliantManaOil, 0, { hidden: false }),
  new Craftable(consumables.adamantiteSharpeningStone, 0, { hidden: false }),
  new Craftable(consumables.adamantiteWeightstone, 0, { hidden: true }),
  new Craftable(consumables.greaterWardOfShielding, 0, { hidden: true }),

  // Protections
  new Craftable(consumables.SPACER_PROTECTION, 0, { hidden: false }),
  new Craftable(consumables.arcaneCauldron, 0, { hidden: true }),
  new Craftable(consumables.fireCauldron, 0, { hidden: true }),
  new Craftable(consumables.frostCauldron, 0, { hidden: true }),
  new Craftable(consumables.natureCauldron, 0, { hidden: false }),
  new Craftable(consumables.shadowCauldron, 0, { hidden: false }),
  new Craftable(consumables.majorArcaneProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.majorFireProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.majorFrostProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.majorNatureProtectionPotion, 0, { hidden: false }),
  new Craftable(consumables.majorShadowProtectionPotion, 0, { hidden: false }),
  new Craftable(consumables.greaterArcaneProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.greaterFireProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.greaterFrostProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.greaterNatureProtectionPotion, 0, { hidden: true }),
  new Craftable(consumables.greaterShadowProtectionPotion, 0, { hidden: true }),

  // Food
  new Craftable(consumables.SPACER_FOOD, 0, { hidden: false }),
  new Craftable(consumables.fishermansFeast, 0, { hidden: false }),
  new Craftable(consumables.spicyCrawdad, 0, { hidden: false }),
  new Craftable(consumables.grilledMudfish, 0, { hidden: true }),
  new Craftable(consumables.warpBurger, 0, { hidden: false }),
  new Craftable(consumables.spicyHotTalbuk, 0, { hidden: true }),
  new Craftable(consumables.roastedClefthoof, 0, { hidden: true }),
  new Craftable(consumables.ravagerDog, 0, { hidden: true }),
  new Craftable(consumables.blackenedBasilisk, 0, { hidden: false }),
  new Craftable(consumables.crunchySerpent, 0, { hidden: false }),
  new Craftable(consumables.poachedBluefish, 0, { hidden: false }),
  new Craftable(consumables.skullfishSoup, 0, { hidden: false }),
  new Craftable(consumables.goldenFishSticks, 0, { hidden: false }),
  new Craftable(consumables.juicyBearBurger, 0, { hidden: true }),

  // Pet Food
  new Craftable(consumables.kiblersBits, 0, { hidden: true }),
  new Craftable(consumables.sporelingSnack, 0, { hidden: true }),

  //CLASSIC SECTION --
    // Stat potions
  new Craftable(consumables.SPACER_CLASSIC, 0, { hidden: false }),
    new Craftable(consumables.elixirOfGiants, 0, { hidden: true }),
    new Craftable(consumables.elixirOfTheMongoose, 0, { hidden: true }),
    new Craftable(consumables.elixirOfGreaterAgility, 0, { hidden: true }),
  
    // Magic protection potions
    // in TBC section
  
    // Poison cures
    new Craftable(consumables.elixirOfPoisonResistance, 0, { hidden: true }),
    new Craftable(consumables.restorativePotion, 0, { hidden: true }),
    new Craftable(consumables.antiVenom, 0, { hidden: true }),
    new Craftable(consumables.strongAntiVenom, 0, { hidden: true }),
    new Craftable(consumables.powerfulAntiVenom, 0, { hidden: true }),
  
    // Armor potions
    new Craftable(consumables.greaterStoneshieldPotion, 0, { hidden: false }),
    new Craftable(consumables.lesserStoneshieldPotion, 0, { hidden: true }),
    new Craftable(consumables.elixirOfSuperiorDefense, 0, { hidden: true }),
    new Craftable(consumables.elixirOfGreaterDefense, 0, { hidden: true }),
  
    // Weapon enhancements
    new Craftable(consumables.elementalSharpeningStone, 0, { hidden: false }),
    new Craftable(consumables.denseSharpeningStone, 0, { hidden: true }),
    new Craftable(consumables.denseWeightstone, 0, { hidden: true }),
    new Craftable(consumables.frostOil, 0, { hidden: true }),
    new Craftable(consumables.brilliantManaOil, 0, { hidden: true }),
    new Craftable(consumables.lesserManaOil, 0, { hidden: true }),
    new Craftable(consumables.brilliantWizardOil, 0, { hidden: true }),
    new Craftable(consumables.wizardOil, 0, { hidden: true }),
  
    // Restoration potions
    new Craftable(consumables.majorManaPotion, 0, { hidden: false }),
    new Craftable(consumables.majorHealingPotion, 0, { hidden: false }),
    new Craftable(consumables.majorRejuvenationPotion, 0, { hidden: true }),
  
    // Spellpower potions
    new Craftable(consumables.greaterArcaneElixir, 0, { hidden: false }),
    new Craftable(consumables.arcaneElixir, 0, { hidden: true }),
    new Craftable(consumables.elixirOfGreaterFirepower, 0, { hidden: false }),
    new Craftable(consumables.elixirOfShadowPower, 0, { hidden: true }),
  
    // Util potions
    new Craftable(consumables.limitedInvulnerabilityPotion, 0, { hidden: true }),
    new Craftable(consumables.freeActionPotion, 0, { hidden: false }),
    new Craftable(consumables.giftOfArthas, 0, { hidden: true }),
    new Craftable(consumables.swiftnessPotion, 0, { hidden: false }),
    new Craftable(consumables.mightyRagePotion, 0, { hidden: true }),
    new Craftable(consumables.elixirOfFortitude, 0, { hidden: true }),
    new Craftable(consumables.majorTrollsBloodPotion, 0, { hidden: false }),
    new Craftable(consumables.mightyTrollsBloodPotion, 0, { hidden: true }),
    new Craftable(consumables.magebloodPotion, 0, { hidden: true }),
  
    // Stat foods
    new Craftable(consumables.smokedDesertDumplings, 0, { hidden: false }),
    new Craftable(consumables.dirgesKickinChimaerokChops, 0, { hidden: false }),
    new Craftable(consumables.grilledSquid, 0, { hidden: true }),
    new Craftable(consumables.runnTumTuberSurprise, 0, { hidden: true }),
    new Craftable(consumables.spicedChiliCrab, 0, { hidden: true }),
    new Craftable(consumables.monsterOmelet, 0, { hidden: true }),
    new Craftable(consumables.tenderWolfSteak, 0, { hidden: true }),
    new Craftable(consumables.heavyKodoStew, 0, { hidden: true }),
    new Craftable(consumables.spiderSausage, 0, { hidden: true }),
  
    // Util foods
    new Craftable(consumables.nightfinSoup, 0, { hidden: false }),
    new Craftable(consumables.sagefishDelight, 0, { hidden: true }),
    new Craftable(consumables.poachedSunscaleSalmon, 0, { hidden: true }),
  
    // Flasks
    // in tbc section
  
    // Stat items
    new Craftable(consumables.roids, 0, { hidden: true }),
    new Craftable(consumables.lungJuiceCocktail, 0, { hidden: true }),
    new Craftable(consumables.groundScorpokAssay, 0, { hidden: true }),
    new Craftable(consumables.cerebralCortexCompound, 0, { hidden: true }),
];

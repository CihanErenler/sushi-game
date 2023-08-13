class Game {
  money = 0;
  price = 10;
  currentSushi = 0;
  totalSushi = 0;
  soldSushi = 0;
  material = 10000;
  demand = 0;
  sushiPerSecond = 0;
  materialBuyAmount = 10000;
  uniteMaterialAmount = 100;
  materialCost = 500;
  sushiMachinePrice = 400;
  sushiMachineAmount = 0;
  isSushiMachineRunning = false;
  isErranWorking = false;
  isChefWorking = false;
  errandHirePrice = 1000;
  errandAmount = 0;
  chefHirePrice = 3000;
  chefAmount = 0;

  canBuyMaterial = () => {
    return this.money >= this.materialCost;
  };

  canLowerPrice = () => {
    return this.price > 1;
  };

  canRaisePrice = () => {
    return this.price < 60;
  };

  canBuySushiMachine = () => {
    return this.money >= this.sushiMachinePrice;
  };

  canHireErrand = () => {
    return this.money >= this.errandHirePrice;
  };

  canHireChef = () => {
    return this.money >= this.chefHirePrice;
  };

  buyMaterial = () => {
    this.money -= this.materialCost;
    this.material += this.materialBuyAmount;
  };

  hireErrand = () => {
    this.errandAmount += 1;
    this.money -= this.errandHirePrice;
  };

  hireChef = () => {
    this.chefAmount += 1;
    this.money -= this.chefHirePrice;
  };

  makeSushi = () => {
    this.currentSushi += 1;
    this.totalSushi += 1;
    this.material -= this.uniteMaterialAmount;
  };

  lowePrice = () => {
    this.price -= 1;
  };

  raisePrice = () => {
    this.price += 1;
  };

  purheseSushi = () => {
    this.currentSushi -= 1;
    this.money += this.price;
  };

  updateDemand = () => {
    this.demand = 100 - (this.price / 13) * 100;
  };

  buySushiMachine = () => {
    this.sushiMachineAmount += 1;
    this.money -= this.sushiMachinePrice;
  };

  runSushiMachine = () => {
    this.isSushiMachineRunning = true;
    setInterval(() => {
      if (this.material >= this.uniteMaterialAmount) {
        this.currentSushi += 1;
        this.totalSushi += 1;
        this.material -= this.uniteMaterialAmount;
      }
    }, 1000);
  };

  startErran = () => {
    this.isErranWorking = true;
    setInterval(() => {
      if (this.material >= 3 * this.errandAmount * this.uniteMaterialAmount) {
        const tempSushi = 3 * this.errandAmount;
        this.currentSushi += tempSushi;
        this.totalSushi += tempSushi;
        this.material -= this.uniteMaterialAmount * tempSushi;
      }
    }, 1000);
  };

  startChef = () => {
    this.isChefWorking = true;
    setInterval(() => {
      if (this.material >= 7 * this.chefAmount * this.uniteMaterialAmount) {
        const tempSushi = 7 * this.chefAmount;
        this.currentSushi += tempSushi;
        this.totalSushi += tempSushi;
        this.material -= this.uniteMaterialAmount * tempSushi;
      }
    }, 1000);
  };

  update = () => {
    this.updateDemand();
    if (this.currentSushi > 0 && Math.random() * 100 < this.demand) {
      this.purheseSushi();
    }
    if (this.sushiMachineAmount > 0 && !this.isSushiMachineRunning) {
      this.runSushiMachine();
    }
    if (this.errandAmount > 0 && !this.isErranWorking) {
      this.startErran();
    }
    if (this.chefAmount > 0 && !this.isChefWorking) {
      this.startChef();
    }
    this.sushiPerSecond =
      this.sushiMachineAmount + 3 * this.errandAmount + 7 * this.chefAmount;
  };
}

export default Game;

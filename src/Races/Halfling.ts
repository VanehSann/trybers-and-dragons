import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return this.instances;     
  }
}

export default Halfling;
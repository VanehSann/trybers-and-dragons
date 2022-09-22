import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return this.instances;     
  }
}

export default Orc;
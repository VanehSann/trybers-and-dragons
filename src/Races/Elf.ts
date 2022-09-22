import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static createdRacesInstances(): number {
    return this.instances;     
  }
}

export default Elf;
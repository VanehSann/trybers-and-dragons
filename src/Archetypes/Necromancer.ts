import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  public energyType: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  public get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }
    
  static createdArchetypeInstances(): number {
    return Necromancer.instances;     
  }
}

export default Necromancer;
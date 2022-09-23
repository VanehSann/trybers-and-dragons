import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  public energyType: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  public get name(): string {
    return this.name;
  }

  static get energyType(): EnergyType {
    return this.energyType;
  }
    
  static createdArchetypeInstances(): number {
    return Ranger.instances;     
  }
}

export default Ranger;
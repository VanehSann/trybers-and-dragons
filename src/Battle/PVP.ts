import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _player1: Fighter, private player2: Fighter) {
    super(player2);
  }

  fight(): number {
    const round = 500;
    for (let index = 0; index < round; index += 1) {
      this.player2.attack(this._player1);
      this._player1.attack(this.player2);
      if (this.player2.lifePoints < this._player1.lifePoints) {
        return 1;
      }
      if (this.player2.lifePoints > this._player1.lifePoints) {
        return -1;
      }
    }
    return 0;
  }
}

export default PVP;
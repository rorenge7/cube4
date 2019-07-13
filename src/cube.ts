import Side from "./side";

export default class Cube {
  constructor(public sides: Side[]) {}

  public fourSides(a: number, b: number, c: number, d: number): Side[] {
    return [this.sides[a], this.sides[b], this.sides[c], this.sides[d]];
  }

  public rotate(type: number): Side[] {
    switch (type) {
      case 0:
        return this.fourSides(1, 3, 4, 5);
      case 1:
        return this.fourSides(5, 4, 1, 3);
      case 2:
        return this.fourSides(3, 1, 5, 4);
      case 3:
        return this.fourSides(4, 5, 3, 1);

      case 4:
        return this.fourSides(0, 2, 4, 5);
      case 5:
        return this.fourSides(5, 4, 0, 2);
      case 6:
        return this.fourSides(2, 0, 5, 4);
      case 7:
        return this.fourSides(4, 5, 2, 0);

      case 8:
        return this.fourSides(1, 3, 2, 0);
      case 9:
        return this.fourSides(0, 2, 1, 3);
      case 10:
        return this.fourSides(3, 1, 0, 2);
      case 11:
        return this.fourSides(2, 0, 3, 1);

      case 12:
        return this.fourSides(3, 1, 4, 5);
      case 13:
        return this.fourSides(5, 4, 3, 1);
      case 14:
        return this.fourSides(1, 3, 5, 4);
      case 15:
        return this.fourSides(4, 5, 1, 3);

      case 16:
        return this.fourSides(2, 0, 4, 5);
      case 17:
        return this.fourSides(5, 4, 2, 0);
      case 18:
        return this.fourSides(0, 2, 5, 4);
      case 19:
        return this.fourSides(4, 5, 0, 2);

      case 20:
        return this.fourSides(3, 1, 2, 0);
      case 21:
        return this.fourSides(0, 2, 3, 1);
      case 22:
        return this.fourSides(1, 3, 0, 2);
      case 23:
        return this.fourSides(2, 0, 1, 3);

      default:
        throw new Error("");
    }
  }
}

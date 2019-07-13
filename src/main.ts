import Cube from "./cube";
import Side from "./side";
import _ from "lodash";

function uniqueSides(sidesList: Side[][]): boolean {
  for (let i = 0; i < 4; i += 1) {
    const isUnique = unique(sidesList.map(cubeSides => cubeSides[i]));
    if (!isUnique) {
      return false;
    }
  }
  return true;
}

function unique(sides: Side[]): boolean {
  return _.uniq(sides).length === sides.length;
}

function main() {
  const cubes = [
    new Cube([
      Side.white,
      Side.white,
      Side.orange,
      Side.green,
      Side.blue,
      Side.orange
    ]),
    new Cube([
      Side.green,
      Side.orange,
      Side.orange,
      Side.orange,
      Side.blue,
      Side.white
    ]),
    new Cube([
      Side.orange,
      Side.white,
      Side.blue,
      Side.blue,
      Side.green,
      Side.green
    ]),
    new Cube([
      Side.orange,
      Side.blue,
      Side.green,
      Side.white,
      Side.green,
      Side.white
    ])
  ];
  _.range(24).forEach(first => {
    _.range(24).forEach(second => {
      _.range(24).forEach(third => {
        _.range(24).forEach(forth => {
          const state = [
            cubes[0].rotate(first),
            cubes[1].rotate(second),
            cubes[2].rotate(third),
            cubes[3].rotate(forth)
          ];

          const isUnique = uniqueSides(state);
          if (isUnique) {
            console.log("unique");
            console.log(state);
          }
        });
      });
    });
  });
}

main();

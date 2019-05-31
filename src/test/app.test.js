import {
  Character, Bowerman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../js/domain';

test('characters should be added correctly', () => {
  const charC = new Character('Лучник', 10, 2, 80, 40);
  console.log(charC);
  const charS = new Swordsman('Мечник', 10, 2);
  console.log(charS);
  const charM = new Magician('Маг', 10, 2);
  console.log(charM);
  const charU = new Undead('Нежить', 10, 2);
  console.log(charU);
  const charZ = new Zombie('Зомби', 10, 2);
  console.log(charZ);
  const charD = new Daemon('Демон', 10, 2);
  console.log(charD);

  const char = new Bowerman('Лучник', 10, 2);
  const expected = {
    name: 'Лучник', health: 10, level: 2, attack: 25, defence: 25,
  };

  expect(char).toEqual(expected);

  /*
  const expected = { name : 'Мечник', health: 10, level: 2, attack: 40, defence: 10 };

  expect(char).toEqual(expected);

  const char = new Magician('Маг', 10, 2);
  const expected = { name : 'Маг', health: 10, level: 2, attack: 10, defence: 40 };

  expect(char).toEqual(expected);

  const char = new Undead('Нежить', 10, 2);
  const expected = { name : 'Нежить', health: 10, level: 2, attack: 25, defence: 25 };

  expect(char).toEqual(expected);

  const char = new Zombie('Зомби', 10, 2);
  const expected = { name : 'Зомби', health: 10, level: 2, attack: 40, defence: 10 };

  expect(char).toEqual(expected);

  const char = new Daemon('Демон', 10, 2);
  const expected = { name : 'Демон', health: 10, level: 2, attack: 10, defence: 40 };

  expect(char).toEqual(expected); */
});

class Character {
  constructor(name, health, level, attack, defence) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

class Bowerman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}

export {
  Character, Bowerman, Swordsman, Magician, Undead, Zombie, Daemon,
};

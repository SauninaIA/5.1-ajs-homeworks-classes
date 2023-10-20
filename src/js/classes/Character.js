export default class Character {
    constructor(name, type) {
        const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должной быть строкой с количеством символов от 2 до 10.');
        } else {
            this.name = name;
        }
      
        if (!validTypes.includes(type)) {
            throw new Error('Некорректное значение типа.');
        } else {
            this.type = type;
        }  

        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего.');
        }
    
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defence *= 1.2;
      }
    
    damage(points) {
        this.health -= points * (1 - this.defence / 100);
    }
}
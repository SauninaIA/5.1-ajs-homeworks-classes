import Zombie from '../classes/Zombie';

test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const zombie = new Zombie('ValidName');
    const correct = {
        name: 'ValidName',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(zombie).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Zombie('InvalidName', 'Zombie')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Zombie('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const zombie = new Zombie('ValidName', 'Zombie');
    zombie.levelUp();
    expect(zombie).toEqual({
        name: 'ValidName',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const zombie = new Zombie('ValidName', 'Zombie');
    zombie.health = 0;
    expect(() => zombie.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const zombie = new Zombie('ValidName', 'Zombie');
    zombie.damage(20);
    expect(zombie.health).toBe(88);
});
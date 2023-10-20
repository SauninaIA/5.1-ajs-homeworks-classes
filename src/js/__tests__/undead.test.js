import Undead from '../classes/Undead';

test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const undead = new Undead('ValidName');
    const correct = {
        name: 'ValidName',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };

    expect(undead).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Undead('InvalidName', 'Undead')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Undead('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const undead = new Undead('ValidName', 'Undead');
    undead.levelUp();
    expect(undead).toEqual({
        name: 'ValidName',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const undead = new Undead('ValidName', 'Undead');
    undead.health = 0;
    expect(() => undead.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const undead = new Undead('ValidName', 'Undead');
    undead.damage(20);
    expect(undead.health).toBe(82);
});
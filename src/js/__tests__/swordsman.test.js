import Swordsman from '../classes/Swordsman';

test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const swordsman = new Swordsman('ValidName');
    const correct = {
        name: 'ValidName',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };

    expect(swordsman).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Swordsman('InvalidName', 'Swordsman')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Swordsman('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const swordsman = new Swordsman('ValidName', 'Swordsman');
    swordsman.levelUp();
    expect(swordsman).toEqual({
        name: 'ValidName',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const swordsman = new Swordsman('ValidName', 'Swordsman');
    swordsman.health = 0;
    expect(() => swordsman.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const swordsman = new Swordsman('ValidName', 'Swordsman');
    swordsman.damage(20);
    expect(swordsman.health).toBe(82);
});
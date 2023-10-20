import Bowman from '../classes/Bowman';

test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const bowman = new Bowman('ValidName');
    const correct = {
        name: 'ValidName',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(bowman).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Bowman('InvalidName', 'Bowman')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Bowman('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const bowman = new Bowman('ValidName', 'Bowman');
    bowman.levelUp();
    expect(bowman).toEqual({
        name: 'ValidName',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const bowman = new Bowman('ValidName', 'Bowman');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const bowman = new Bowman('ValidName', 'Bowman');
    bowman.damage(20);
    expect(bowman.health).toBe(85);
});
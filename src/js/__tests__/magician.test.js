import Magician from '../classes/Magician';

test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const magician = new Magician('ValidName');
    const correct = {
        name: 'ValidName',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(magician).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Magician('InvalidName', 'Magician')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Magician('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const magician = new Magician('ValidName', 'Magician');
    magician.levelUp();
    expect(magician).toEqual({
        name: 'ValidName',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const magician = new Magician('ValidName', 'Magician');
    magician.health = 0;
    expect(() => magician.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const magician = new Magician('ValidName', 'Magician');
    magician.damage(20);
    expect(magician.health).toBe(88);
});
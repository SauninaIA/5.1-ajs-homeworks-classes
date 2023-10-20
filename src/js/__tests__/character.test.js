import Character from '../classes/Character';
  
test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const character = new Character('ValidName', 'Bowman');
    const correct = {
        name: 'ValidName',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };

    expect(character).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Character('InvalidName', 'Bowman')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Character('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const character = new Character('ValidName', 'Bowman');
    character.levelUp();
    expect(character).toEqual({
        name: 'ValidName',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: NaN,
        defence: NaN,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const character = new Character('ValidName', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const character = new Character('ValidName', 'Bowman');
    character.damage(20);
    expect(character.health).toBe(NaN);
});
import Daemon from '../classes/Daemon';

test('Создание персонажа в соответствии с требованиями конструктора', () => {
    const daemon = new Daemon('ValidName');
    const correct = {
        name: 'ValidName',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(daemon).toEqual(correct);
});

test('Создание персонажа с некорректным значением имени', () => {
    expect(() => new Daemon('InvalidName', 'Daemon')).toThrow(
    'Имя должной быть строкой с количеством символов от 2 до 10.'
    );
});

test('Создание персонажа с некорректным значением типа', () => {
    expect(() => new Daemon('ValidName', 'InvalidType')).toThrow(
    'Некорректное значение типа.'
    );
});

test('Проверка метода levelUp()', () => {
    const daemon = new Daemon('ValidName', 'Daemon');
    daemon.levelUp();
    expect(daemon).toEqual({
        name: 'ValidName',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Проверка метода levelUp() при уровне жизни равном 0', () => {
    const daemon = new Daemon('ValidName', 'Daemon');
    daemon.health = 0;
    expect(() => daemon.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('Проверка метода damage(points)', () => {
    const daemon = new Daemon('ValidName', 'Daemon');
    daemon.damage(20);
    expect(daemon.health).toBe(85);
});
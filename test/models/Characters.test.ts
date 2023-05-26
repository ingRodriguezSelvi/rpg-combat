import Character from "../../src/models/Characters";


describe('Characters', () => {

    test('should create an characters', () => {

        const character = new Character(100);

        expect(character).not.toBeNull();

    });

    test('should be alive', () => {
            const character = new Character(100);
            expect(character.isAlive).toBeTruthy();
    });

    test('should be dead for attack enemy', () => {
        const character = new Character(100);
        const enemy = new Character(1000);

        character.receiveDamage(enemy.damage);

        expect(character.isAlive).toBeFalsy();
    })

    test('it should be cured', () => {
        const character = new Character(100);
        const enemy = new Character(500);

        character.receiveDamage(enemy.damage);

        character.cure();

        //La vida del personaje debe ser 1000
        expect(character.live).toBe(1000);
    })

    test('should not be cured because it is dead', () => {
        const character = new Character(100);
        const enemy = new Character(1000);

        character.receiveDamage(enemy.damage);

        character.cure();

        expect(character.isAlive).toBeFalsy();
    });

    test('should give an error, the attack must not be less than zero', () => {
        expect(() => new Character(-100)).toThrowError('Damage must be greater than 0');
    });
});
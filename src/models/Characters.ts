export default class Character {
    private _live: number = 1000;
    private readonly _level: number = 1;
    private readonly _damage: number;

    constructor(damage: number  ) {
        if (damage < 0) throw new Error('Damage must be greater than 0');
        this._damage = damage;
    }
    receiveDamage(damage: number): void {
        this._live -= damage;
    }

    cure() {
        if (this.isAlive) this._live = 1000;
    }

    get isAlive(): boolean {
        return this._live > 0
    }

    get live(): number {
        return this._live;
    }

    get level(): number {
        return this._level;
    }

    get damage(): number {
        return this._damage;
    }

}
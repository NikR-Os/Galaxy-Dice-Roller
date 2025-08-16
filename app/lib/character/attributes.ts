
export class AttributeSheet {
    private _brawn: number;
    private _agility: number;
    private _intellect: number;
    private _cunning: number;
    private _willpower: number;
    private _presence: number;

    constructor(brawn = 1, agility = 1, intellect = 1, cunning = 1, willpower = 1, presence = 1) {
        this._brawn = brawn;
        this._agility = agility;
        this._intellect = intellect;
        this._cunning = cunning;
        this._willpower = willpower;
        this._presence = presence;
    }
    
    public get brawn() {
        return this._brawn;
    }

    public get agility(){
        return this._agility;
    }

    public get intellect() {
        return this._intellect;
    }

    public get cunning() {
        return this._cunning;
    }

    public get willpower() {
        return this._willpower;
    }

    public get presence() {
        return this._presence;
    }

    public set brawn(brawn: number) {
        this._brawn = brawn;
    }

}
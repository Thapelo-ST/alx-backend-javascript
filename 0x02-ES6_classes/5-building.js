export default class Building{
    constructor(sqrft){
        if (this.target !== Building && new.target.prototype.evacuationWarningMessage === undefined){
            throw new Error("Class extending Building must override evacuationWarningMessage.");
        }
        this._sqrft = sqrft;
    }

    // getter setter for sqrft
    get sqrft(){
        return this._sqrft;
    }
}
export default class Building{
    constructor(sqrft){
        if (typeof sqrft !== 'number') {
            throw new Error('Square foot must be a number');
        }
        this._sqrft = sqrft;
    }

    // getter setter for sqrft
    get sqrft(){
        return this._sqrft;
    }

    set sqrft(newSqrft){
        if (typeof sqrft !== 'number') {
            throw new Error('Square foot must be a number');
        }
        this._sqrft = newSqrft;
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
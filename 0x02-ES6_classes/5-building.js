export default class Building {
    constructor(sqrft) {
	this._sqrft = sqrft;
        if (this.target !== Building && new.target.prototype.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must' / 
			    'override evacuationWarningMessage.');
        }
        //this._sqrft = sqrft;
    }

    // getter setter for sqrft
    get sqrft(){
        return this._sqrft;
    }

    set sqrft(newSqrft) {
        if (newSqrft === undefined || newSqrft === null) {
            throw new Error('Square foot must be defined.');
        }
	
        if (typeof newSqrft !== 'number') {
            throw new Error('Square foot must be a number.');
        }
	
        if (!isFinite(newSqrft) || newSqrft < 0) {
            throw new Error('Square foot must be a finite number greater than or equal to 0.');
        }
	
        this._sqrft = newSqrft;
    }
}

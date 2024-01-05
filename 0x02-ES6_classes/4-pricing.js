import Currency from "./3-currency";

export default class Pricing {
    constructor (amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

        // Getter and setter for amount
    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (typeof newAmount !== 'number') {
        throw new Error('Amount must be a number');
        }
        this._amount = newAmount;
    }

        // Getter and setter for currency
    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) {
            throw new Error('Currency must be an instance of Currency class');
        }
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate) {
	    return amount * conversionRate;
    }
}

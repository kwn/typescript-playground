import Criterion = require('./../Criterion');
import Basket = require('./../../../Basket/Basket');

class BasketMinimumValue implements Criterion {
    /**
     * @type {number}
     */
    private minimumValue: number;

    /**
     * Constructor
     *
     * @param minimumValue
     */
    constructor(minimumValue: number) {
        this.minimumValue = minimumValue;
    }

    /**
     * Check if criterion is met by a basket
     *
     * @param basket
     * @returns {boolean}
     */
    public isCriterionMet(basket: Basket) {
        return basket.getSubtotalIncVat() >= this.minimumValue;
    }
}

export = BasketMinimumValue;

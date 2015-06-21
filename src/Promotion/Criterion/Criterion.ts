import Basket = require('./../../Basket/Basket');

interface Criterion {
    isCriterionMet(basket: Basket): boolean;
}

export = Criterion

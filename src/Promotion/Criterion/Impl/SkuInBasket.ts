import Criterion = require('./../Criterion');
import Basket = require('../../../Basket/Basket');

class SkuInBasket implements Criterion {
    isCriterionMet(basket: Basket) {
        return true;
    }
}

export = SkuInBasket;

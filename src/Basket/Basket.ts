class Basket {
    /**
     * @type {number}
     */
    private subtotalIncVat: number;

    /**
     * @type {number}
     */
    private discountIncVat: number;

    /**
     * @type {number}
     */
    private totalIncVat: number;

    /**
     * Constructor
     */
    constructor() {
        this.subtotalIncVat = 10;
        this.discountIncVat = 0;
        this.totalIncVat = 10;
    }

    /**
     * Set subtotal including VAT
     *
     * @param subtotalIncVat
     */
    public setSubtotalIncVat(subtotalIncVat: number): void {
        this.subtotalIncVat = subtotalIncVat;
    }

    /**
     * Get subtotal including VAT
     *
     * @returns {number}
     */
    public getSubtotalIncVat(): number {
        return this.subtotalIncVat;
    }

    /**
     * Set discount including VAT
     *
     * @param discountIncVat
     */
    public setDiscountIncVat(discountIncVat: number): void {
        this.discountIncVat = discountIncVat;
    }

    /**
     * Get discount including VAT
     *
     * @returns {number}
     */
    public getDiscountIncVat(): number {
        return this.discountIncVat;
    }

    /**
     * Set total including VAT
     *
     * @param totalIncVat
     */
    public setTotalIncVat(totalIncVat: number): void {
        this.totalIncVat = totalIncVat;
    }

    /**
     * Get total including VAT
     *
     * @returns {number}
     */
    public getTotalIncludingVat(): number {
        return this.totalIncVat;
    }
}

export = Basket;

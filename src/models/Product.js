class Product {
    constructor(name, price, isImported = false) {
        this.name = name;
        this.price = price;
        this.isImported = isImported;
        this.quantity = 1;
    }

    isExempt() {
        const exemptCategories = ['book', 'chocolate', 'pills'];
        return exemptCategories.some(category => 
            this.name.toLowerCase().includes(category)
        );
    }

    getBasicTax() {
        return this.isExempt() ? 0 : 0.10;
    }

    getImportTax() {
        return this.isImported ? 0.05 : 0;
    }

    getTotalTax() {
        const basicTax = this.price * this.getBasicTax();
        const importTax = this.price * this.getImportTax();
        return this.roundTax(basicTax + importTax);
    }

    roundTax(tax) {
        // Round up to the nearest 0.05
        return Math.ceil(tax * 20) / 20;
    }

    getPriceWithTax() {
        // Round to 2 decimal places to avoid floating-point precision issues
        return Number((this.price + this.getTotalTax()).toFixed(2));
    }

    toString() {
        return `${this.quantity} ${this.name}: ${this.getPriceWithTax().toFixed(2)}`;
    }
}

module.exports = Product; 
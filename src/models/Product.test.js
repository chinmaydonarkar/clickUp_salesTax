const Product = require('./Product');

describe('Product', () => {
    test('should calculate correct tax for non-exempt, non-imported item', () => {
        const product = new Product('music CD', 14.99);
        expect(product.getTotalTax()).toBe(1.50);
        expect(product.getPriceWithTax()).toBe(16.49);
    });

    test('should calculate correct tax for exempt item', () => {
        const product = new Product('book', 12.49);
        expect(product.getTotalTax()).toBe(0);
        expect(product.getPriceWithTax()).toBe(12.49);
    });

    test('should calculate correct tax for imported item', () => {
        const product = new Product('imported bottle of perfume', 47.50, true);
        expect(product.getTotalTax()).toBe(7.15);
        expect(product.getPriceWithTax()).toBe(54.65);
    });

    test('should calculate correct tax for imported exempt item', () => {
        const product = new Product('imported box of chocolates', 10.00, true);
        expect(product.getTotalTax()).toBe(0.50);
        expect(product.getPriceWithTax()).toBe(10.50);
    });
}); 
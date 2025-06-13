class InputParser {
    static parseInputLines(input) {
        // Split by newlines, preserve empty lines
        const lines = input.split('\n');
        const Product = require('../models/Product');
        const result = [];

        for (const line of lines) {
            // Split each line by the pattern "number word at number"
            const items = line.match(/\d+\s+[^0-9]+?at\s+\d+\.\d+/g);
            if (!items) {
                result.push([]); // preserve empty lines
                continue;
            }
            const products = items.map(item => {
                const match = item.match(/^(\d+)\s+(.+?)\s+at\s+(\d+\.\d+)$/);
                if (!match) return null;
                const [_, quantity, name, price] = match;
                const isImported = name.toLowerCase().includes('imported');
                const product = new Product(name, parseFloat(price), isImported);
                product.quantity = parseInt(quantity);
                return product;
            }).filter(Boolean);
            result.push(products);
        }
        return result;
    }
}

module.exports = InputParser; 
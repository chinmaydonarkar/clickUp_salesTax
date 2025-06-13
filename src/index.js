const InputParser = require('./utils/InputParser');
const Product = require('./models/Product');

// Helper to flatten product arrays
function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

// Helper to sum tax and total
function sumTaxAndTotal(productGroups) {
    let totalTax = 0;
    let total = 0;
    const allProducts = flatten(productGroups);
    
    allProducts.forEach(product => {
        const productTax = product.getTotalTax();
        const productTotal = product.getPriceWithTax();
        totalTax += productTax;
        total += productTotal;
    });
    
    return { totalTax, total };
}

// Test cases
const testCases = [
    // Test case 0: All items on one line
    `1 book at 12.49 1 music CD at 14.99 1 chocolate bar at 0.85`,

    // Test case 1: Items on separate lines
    `1 book at 12.49\n1 music CD at 14.99\n1 chocolate bar at 0.85`,

    // Test case 2: Items on same line
    `1 imported box of chocolates at 10.00 1 imported bottle of perfume at 47.50`,

    // Test case 3: Mixed format
    `1 imported bottle of perfume at 27.99 1 bottle of perfume at 18.99\n1 packet of headache pills at 9.75\n1 box of imported chocolates at 11.25`
];

// Process each test case
testCases.forEach((input, index) => {
    console.log(`\nOutput ${index}:`);
    const productGroups = InputParser.parseInputLines(input);
    
    productGroups.forEach((group, i) => {
        if (group.length === 0) {
            console.log('');
        } else {
            const line = group.map(product => product.toString()).join(' ');
            process.stdout.write(line);
            if (i !== productGroups.length - 1) console.log('');
        }
    });
    
    const { totalTax, total } = sumTaxAndTotal(productGroups);
    process.stdout.write(` Sales Taxes: ${totalTax.toFixed(2)} Total: ${total.toFixed(2)}\n`);
}); 
# Sales Tax Calculator

A Node.js application that calculates sales tax for shopping baskets based on specific rules and formats the output according to the input structure.

## Features

- Calculates basic sales tax (10%) on all goods except books, food, and medical products
- Calculates import duty (5%) on all imported goods
- Rounds sales tax up to the nearest 0.05
- Preserves input formatting in output (single line vs multiple lines)
- Handles various input formats and edge cases
- Includes comprehensive test suite

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sales-tax-calculator.git
cd sales-tax-calculator
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Running the Application

```bash
npm start
```

### Running Tests

```bash
npm test
```

## Input Format

The application accepts input in the following format:
```
quantity name at price
```

Examples:
```
1 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85
```

Multiple items can be on the same line or different lines:
```
1 imported box of chocolates at 10.00 1 imported bottle of perfume at 47.50
```

## Output Format

The output maintains the same line structure as the input and includes:
- Item name and price (including tax)
- Total sales taxes
- Total amount

Example:
```
1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83
```

## Tax Rules

1. Basic Sales Tax:
   - Rate: 10%
   - Exemptions: books, food, medical products

2. Import Duty:
   - Rate: 5%
   - Applies to all imported goods
   - No exemptions

3. Rounding:
   - Sales tax is rounded up to the nearest 0.05

## Project Structure

```
src/
├── models/
│   ├── Product.js         # Product class with tax calculation logic
│   └── Product.test.js    # Unit tests for Product class
├── utils/
│   └── InputParser.js     # Input parsing and formatting
└── index.js              # Main application entry point
```

## Development

### Adding New Features

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and run tests:
```bash
npm test
```

3. Submit a pull request

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Write tests for new features

## Testing

The project uses Jest for testing. Run tests with:
```bash
npm test
```

Test coverage includes:
- Product tax calculations
- Input parsing
- Edge cases
- Formatting rules

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Author

[Your Name]

## Acknowledgments

- Inspired by the Sales Tax problem 
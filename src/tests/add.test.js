const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should show correct greeting', () => {
    const result = generateGreeting("Rick");
    expect(result).toBe("Hello Rick!");
});

test('should generate greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});
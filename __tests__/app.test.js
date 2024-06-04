/**
 * @jest-environment jsdom
 */

const { helloWorld } = require('../docs/app');

test('should update the h1 text to "Hello, florens!"', () => {
    // Setup the DOM environment
    document.body.innerHTML = '<h1 id="header">Hello, world!</h1>';
    
    // Call the function that updates the heading
    const header = document.getElementById('header');
    header.textContent = helloWorld();
    
    // Assertions
    expect(header.textContent).toBe('Hello, florens!');
});

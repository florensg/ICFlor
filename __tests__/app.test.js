/**
 * @jest-environment jsdom
 */

const { updateHeading } = require('../docs/app');

test('should update the h1 text to "Hello, world!"', () => {
    // Setup the DOM environment
    document.body.innerHTML = '<h1>Hello, world!</h1>';
    
    // Call the function to update the heading
    const result = updateHeading();
    
    // Get the h1 element
    const heading = document.querySelector('h1');
    
    // Assertions
    expect(result).toBe('Hello, world!');
    expect(heading.textContent).toBe('Hello, world!');
});

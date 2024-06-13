// __tests__/app.test.js
const { helloWorld } = require('../docs/app');

test('should return "Hello, flor!"', () => {
  expect(helloWorld()).toBe('Hello, florencia!');
});

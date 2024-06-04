// __tests__/app.test.js
const { helloWorld } = require('../docs/app');

test('should return "Hello, florencia!"', () => {
  expect(helloWorld()).toBe('Hello, florencia!');
});

// __tests__/app.test.js
const { helloWorld } = require('../docs/app');

test('should return "Hello, world!"', () => {
  expect(helloWorld()).toBe('Hello, world!');
});

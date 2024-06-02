const { helloWorld } = require('../app');

test('should return "Hello, world!"', () => {
  expect(helloWorld()).toBe('Hello, world!');
});

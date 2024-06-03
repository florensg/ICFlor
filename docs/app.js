function helloWorld() {
    return 'Hello, world!';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log(helloWorld());
  });
  
  module.exports = { helloWorld };
  
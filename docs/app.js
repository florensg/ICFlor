function helloWorld() {
    return 'Hello, florens!';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log(helloWorld());
  });
  
  module.exports = { helloWorld };
  
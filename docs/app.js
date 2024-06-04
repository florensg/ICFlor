function helloWorld() {
    return 'Hello, florencia!';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log(helloWorld());
  });
  
  module.exports = { helloWorld };
  
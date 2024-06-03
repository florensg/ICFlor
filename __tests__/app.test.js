// docs/app.js

function helloWorld() {
    return 'Hello, world!';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log(helloWorld());
  });
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { helloWorld };
  }
  
function helloWorld() {
  return 'Hello, flor!';
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  header.textContent = helloWorld();
});

module.exports = { helloWorld };

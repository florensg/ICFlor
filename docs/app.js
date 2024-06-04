function helloWorld() {
  return 'Hello, world!';
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  header.textContent = helloWorld();
});

module.exports = { helloWorld };

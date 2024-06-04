function helloWorld() {
  return 'Hello, florens!';
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  header.textContent = helloWorld();
});

module.exports = { helloWorld };

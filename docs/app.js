function helloWorld() {
  return 'Hello, florcita';
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  header.textContent = helloWorld();
});

module.exports = { helloWorld };

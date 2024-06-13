function helloWorld() {
  return 'Hello, florencia';
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  header.textContent = helloWorld();
});

module.exports = { helloWorld };

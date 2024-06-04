function updateHeading() {
  const heading = document.querySelector('h1');
  heading.textContent = 'Hello, florens!';
  return heading.textContent;
}

document.addEventListener('DOMContentLoaded', () => {
  updateHeading();
});

module.exports = { updateHeading };

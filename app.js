function updateHeading() {
  const heading = document.querySelector('h1');
  heading.textContent = 'Hello, world!';
  return heading.textContent;
}

document.addEventListener('DOMContentLoaded', () => {
  updateHeading();
});

module.exports = { updateHeading };

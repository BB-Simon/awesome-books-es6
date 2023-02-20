const sections = document.querySelectorAll('.content');

export default (link, index) => {
  link.addEventListener('click', () => {
    sections.forEach((s, i) => {
      if (index === i) {
        s.style.display = 'block';
      } else {
        s.style.display = 'none';
      }
    });
  });
};
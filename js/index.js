// Active states

const links = document.querySelectorAll('#navLinks a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('before:w-full', 'text-blue-300');
  } else {
    link.classList.remove('before:w-full', 'text-blue-300');
  }
});

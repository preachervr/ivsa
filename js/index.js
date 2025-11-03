// Active states

const links = document.querySelectorAll('#navLinks a');
links.forEach(link => {
  if (link.href === window.location.href) {
    // Add the same underline effect that happens on hover
    link.classList.add('before:w-full', 'text-blue-400');
  } else {
    link.classList.remove('before:w-full', 'text-blue-400');
  }
});

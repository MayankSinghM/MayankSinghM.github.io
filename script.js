// Expand/collapse project details interactively
document.querySelectorAll('.project-card').forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('expanded');
  });
});

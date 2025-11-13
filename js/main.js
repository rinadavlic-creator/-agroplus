document.addEventListener('DOMContentLoaded', function () {
  // Форма консультации
  const form = document.getElementById('consultForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Спасибо! Мы скоро с вами свяжемся.');
      form.reset();
    });
  }
});
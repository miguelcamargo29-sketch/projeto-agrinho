// Script simples para demonstração

// Formulário de contato
const contatoForm = document.getElementById('contato-form');
if (contatoForm) {
  contatoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada! (exemplo estático)');
    contatoForm.reset();
  });
}

// Formulário de newsletter
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Inscrição realizada! (exemplo estático)');
    newsletterForm.reset();
  });
}


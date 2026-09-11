document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const pfForm = document.getElementById('pf-form');
  const pjForm = document.getElementById('pj-form');

  // Alternância de abas Pessoa Física / Jurídica estilo Wine
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      if (target === 'pf-form') {
        pfForm.style.display = 'block';
        pjForm.style.display = 'none';
      } else {
        pfForm.style.display = 'none';
        pjForm.style.display = 'block';
      }
    });
  });

  // Exemplo de manipulação do submit do formulário PF
  if (pfForm) {
    pfForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Conta Pessoa Física criada com sucesso na Vinheria Agnello!');
      window.location.href = 'login.html';
    });
  }

  // Exemplo de manipulação do submit do formulário PJ
  if (pjForm) {
    pjForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Conta Pessoa Jurídica cadastrada com sucesso!');
      window.location.href = 'login.html';
    });
  }
});
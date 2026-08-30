document.addEventListener("DOMContentLoaded", function () {
  // Configuração ultra-sensível para disparar assim que a seção aparecer na tela
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.07
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const animatedElements = document.querySelectorAll('.scroll-animate-left, .scroll-animate-right, .scroll-animate-up');
  animatedElements.forEach(el => observer.observe(el));
});

// Lógica de seleção do estilo de evento na calculadora
document.addEventListener('DOMContentLoaded', () => {
  const botoesEstilo = document.querySelectorAll('.type-btn');

  botoesEstilo.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesEstilo.forEach(b => b.classList.remove('active'));
      botao.classList.add('active');
    });
  });
});

// Renderização dinâmica da vitrine "Achados da Semana" e integração com o carrinho
document.addEventListener('DOMContentLoaded', () => {
  const containerVitrine = document.getElementById('vitrine-achados-container');

  if (containerVitrine) {
    containerVitrine.innerHTML = achadosDaSemana.map(produto => `
      <article class="${produto.cardClass || 'product-card'}">
        ${produto.tag || ''}
        <div class="product-img-placeholder">
          <img src="${produto.imagem}" alt="${produto.nome}">
        </div>
        <div class="product-info">
          <span class="product-meta">${produto.meta}</span>
          <h3 class="product-name">${produto.nome}</h3>
          <ul class="product-scores">
            ${produto.scores.map(score => `
              <li>
                <img class="score-icon" src="/assets/icons/star-check.svg" alt="Estrela de verificação">
                ${score}
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="product-footer">
          <div class="price-box">
            ${produto.precoAntigo ? `<span class="old-price">${produto.precoAntigo}</span>` : ''}
            <span class="product-price">${produto.preco}</span>
          </div>
          <button class="btn-circle-add" aria-label="Adicionar ao carrinho" onclick='adicionarAoCarrinho(${JSON.stringify({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem
    })})'>+</button>
        </div>
      </article>
    `).join('');
  }
});
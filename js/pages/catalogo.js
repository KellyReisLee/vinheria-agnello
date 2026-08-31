document.addEventListener('DOMContentLoaded', () => {
  const containerVinhos = document.getElementById('vinhos-container');
  const totalProdutosEl = document.getElementById('total-produtos');
  const inputBusca = document.getElementById('input-busca');
  const botoesFiltro = document.querySelectorAll('.filtro-btn');
  const selectOrdenacao = document.getElementById('select-ordenacao');

  let categoriaAtiva = 'todos';

  // Função principal para renderizar os cards na tela
  function renderizarCatalogo(listaDeVinhos) {
    if (!containerVinhos) return;

    totalProdutosEl.textContent = listaDeVinhos.length;

    if (listaDeVinhos.length === 0) {
      containerVinhos.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
          <h3>Nenhum rótulo encontrado</h3>
          <p>Tente buscar por outro termo ou categoria.</p>
        </div>
      `;
      return;
    }

    containerVinhos.innerHTML = listaDeVinhos.map(vinho => `
      <div class="vinho-card">
        ${vinho.desconto ? `<span class="vinho-badge-desconto">${vinho.desconto}</span>` : ''}
        <div class="vinho-img-wrapper">
          <img src="${vinho.imagem}" alt="${vinho.nome}" class="vinho-img" onerror="this.style.display='none'; this.parentElement.style.backgroundColor='#f4f4f4';">
        </div>
        <div class="vinho-info">
          <div class="vinho-meta-topo">
            <span class="vinho-tipo">${vinho.tipo}</span>
            <span class="vinho-pontuacao">${vinho.pontuacao}</span>
          </div>
          <span class="vinho-origem">${vinho.origem}</span>
          <h3 class="vinho-nome">${vinho.nome}</h3>
          <p class="vinho-desc">${vinho.descricao}</p>
          <div class="vinho-footer">
            <div class="vinho-precos">
              ${vinho.precoAntigo ? `<span class="preco-antigo">${vinho.precoAntigo}</span>` : ''}
              <span class="vinho-preco">${vinho.preco}</span>
            </div>
            <button class="btn-comprar" onclick="alert('Rótulo ${vinho.nome} selecionado com sucesso!')">Selecionar</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Função auxiliar para converter o preço em texto (ex: "R$ 189,90") em número para ordenação
  function converterPrecoParaNumero(precoStr) {
    if (!precoStr) return 0;
    return parseFloat(precoStr.replace('R$', '').replace('.', '').replace(',', '.').trim());
  }

  // Lógica combinada de Filtragem, Busca e Ordenação
  function aplicarFiltrosEBusca() {
    let resultado = [...catalogoVinhos];

    // 1. Filtrar por categoria selecionada nos botões
    if (categoriaAtiva === 'tinto') {
      resultado = resultado.filter(v => v.tipo.toLowerCase().includes('tinto'));
    } else if (categoriaAtiva === 'branco') {
      resultado = resultado.filter(v => v.tipo.toLowerCase().includes('branco'));
    } else if (categoriaAtiva === 'espumante') {
      resultado = resultado.filter(v => v.tipo.toLowerCase().includes('espumante') || v.tipo.toLowerCase().includes('cava'));
    }

    // 2. Filtrar pelo termo digitado na barra de busca
    const termoBusca = inputBusca.value.toLowerCase().trim();
    if (termoBusca !== '') {
      resultado = resultado.filter(v =>
        v.nome.toLowerCase().includes(termoBusca) ||
        v.origem.toLowerCase().includes(termoBusca) ||
        v.tipo.toLowerCase().includes(termoBusca) ||
        v.descricao.toLowerCase().includes(termoBusca)
      );
    }

    // 3. Ordenação de Valores
    const criterioOrdenacao = selectOrdenacao.value;
    if (criterioOrdenacao === 'menor-preco') {
      resultado.sort((a, b) => converterPrecoParaNumero(a.preco) - converterPrecoParaNumero(b.preco));
    } else if (criterioOrdenacao === 'maior-preco') {
      resultado.sort((a, b) => converterPrecoParaNumero(b.preco) - converterPrecoParaNumero(a.preco));
    } else if (criterioOrdenacao === 'nome') {
      resultado.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    renderizarCatalogo(resultado);
  }

  // Event Listeners (Ouvintes de Ações do Usuário)
  if (inputBusca) {
    inputBusca.addEventListener('input', aplicarFiltrosEBusca);
  }

  if (selectOrdenacao) {
    selectOrdenacao.addEventListener('change', aplicarFiltrosEBusca);
  }

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', (e) => {
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      e.target.classList.add('ativo');
      categoriaAtiva = e.target.getAttribute('data-filtro');
      aplicarFiltrosEBusca();
    });
  });

  // Carga inicial exibindo todos os vinhos do catalogo.js
  if (typeof catalogoVinhos !== 'undefined') {
    renderizarCatalogo(catalogoVinhos);
  } else {
    console.error("O arquivo catalogo.js não foi carregado corretamente.");
  }
});
let lastScrollY = window.scrollY;
const menu = document.getElementById('menu');

// Detecta rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // rolando para baixo → esconde o menu
        menu.classList.add('hide');
    } else {
        // rolando para cima → mostra o menu
        menu.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

// Detecta mouse próximo ao topo da tela
document.addEventListener('mousemove', (e) => {
    if (e.clientY < 80) {
        // se o mouse estiver perto do topo mostra o menu
        menu.classList.remove('hide');
    }
});


//__________________________________________________________

// seleção de principais pejetos
let projetoAberto = null;  // Variável para controlar qual projeto está aberto

function abrirDetalhes(id) {
  const detalhe = document.getElementById(`detalhe-projeto-${id}`);

  // Verifica se o projeto já está aberto
  if (projetoAberto === id) {
    // Se o projeto clicado já está aberto, fecha ele
    detalhe.classList.toggle('mostrar');
    projetoAberto = null; // Marca que nenhum projeto está aberto
  } else {
    // Se não, abre o novo projeto
    if (projetoAberto !== null) {
      // Fecha o projeto atualmente aberto, se houver
      const projetoFechado = document.getElementById(`detalhe-projeto-${projetoAberto}`);
      projetoFechado.classList.remove('mostrar');
    }

    // Abre o novo projeto
    detalhe.classList.add('mostrar');
    projetoAberto = id; // Marca o projeto aberto

    // Rolagem suave para o detalhe do projeto
    detalhe.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

//________________________________________________________________________

// js das tecnologias em esteira infinita
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.tecnologias-track');
  
  // Duplica os ícones
  track.innerHTML += track.innerHTML;
  
  // Calcola o tempos
  const firstChild = track.children[0];
  const style = getComputedStyle(firstChild);
  const margin = parseFloat(style.marginRight);
  
  const totalWidth = Array.from(track.children).reduce((acc, child) => 
    acc + child.clientWidth + margin, 0
  ) / 2;
  
  
  track.style.animationDuration = `${totalWidth / 10}s`;
});

//_____________________________________________________________________________________

// js aonde fica todos os projetos no port.

// Função para alternar entre os projetos
function mostrar(secao) {
  // Remove a classe "ativo" de todos os botões
  document.querySelectorAll(".menu button").forEach(btn => {
    btn.classList.remove("ativo");
  });

  // Adiciona a classe "ativo" no botão clicado
  document.getElementById(`btn-${secao}`).classList.add("ativo");

  // Esconde todas as seções
  document.querySelectorAll(".conteudo .sessao").forEach(s => {
    s.classList.remove("visivel");
  });

  // Mostra a seção clicada
  document.getElementById(secao).classList.add("visivel");
}


//____________________________________________
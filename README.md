# 🎯 Tap tap

> Jogo rápido de palavras por letra inicial no estilo *Tapple* / *Trava Letras*, feito para jogar em grupo ou solo no celular e no computador.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-8257E5?style=flat-square)
![Licença MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=flat-square)

---

## 📖 Sobre o Jogo

**Tap tap** é uma aplicação web front-end pensada para partidas rápidas e descontraídas em viagens, esperando um pedido em bares ou restaurantes, ou para aquecer antes de uma *game night*.

O objetivo é falar uma palavra que pertença ao **tema da rodada** começando com uma **letra ainda disponível** antes que o cronômetro chegue a zero. Ao tocar na letra correspondente, ela é travada (fica acinzentada e indisponível), o tempo é restaurado para a próxima jogada e o ciclo continua até restar um jogador (no modo em grupo) ou até todas as letras do alfabeto serem concluídas (vitória coletiva ou desafio solo).

---

## 🕹️ Como Jogar

### 1. Configuração inicial
Ao abrir a página, o jogo começa **pausado** com a janela de configuração sobreposta ao tabuleiro:
- **Tema da rodada:** Escolha um tema na lista suspensa, digite um tema personalizado ou clique em **🔄** para sortear um tema sem repetir os últimos sorteados (quando todos os temas da lista são usados, o histórico é reiniciado).
- **Tempo (`T`):** Defina a duração do cronômetro em segundos (padrão: `10` segundos).
- **Letras K, Y e W:** Marque ou desmarque *"Remover letras K, Y e W"* conforme desejar.
- **Ajuda (`❔`):** Abre o modal com as regras rápidas (fecha ao clicar em **Voltar** ou pressionar `Esc`).
- **Iniciar:** Fecha o modal de configuração e inicia a contagem regressiva.

### 2. Durante a rodada
- **Fale e trave:** O jogador da vez fala uma palavra válida para o tema usando uma letra ainda ativa e clica/toca no card dessa letra.
- **Efeito dos cards:** Cada card travado perde a saturação (fica acinzentado), não pode mais ser clicado e vai para o fim da fila.
  - Em **telas mobile** (largura até `768px`), o tabuleiro exibe um grid `3x3` com o cronômetro no centro e prioriza os cards ativos visíveis para facilitar o toque.
  - Em **telas maiores**, o tabuleiro exibe um grid `5x5` com o cronômetro no centro.
- **Cronômetro e som:** O círculo central decrementa `1` segundo por vez. Acima de `5s`, o tique-taque soa a cada 1 segundo; de `5s` a `0s`, a frequência acelera para **2 cliques por segundo** (a cada `500ms`) usando a **Web Audio API**. Clicar em uma letra válida restaura o tempo `T`.
- **Voltar à configuração:** O botão **🏠** no cabeçalho pausa o jogo e abre novamente a tela de configuração.

### 3. Encerramento da rodada
- **Tempo esgotado (`T` chega a `0`):** Abre o modal **"Tempo esgotado!"** com as opções:
  - **🏠 Início:** Volta para a tela inicial de configuração.
  - **▶️ Continuar:** Fecha o modal, restaura o tempo `T` e retoma a partida com os cards restantes.
  - **🔄 Jogar de novo:** Sorteia um novo tema, restaura o tempo `T`, reseta e embaralha os cards.
- **Todas as letras travadas:** Exibe uma animação de **confetes** e abre o modal **"Uau, vocês venceram!"** com as opções de voltar ao início ou jogar novamente.

*(Observação: o código atual foca no fluxo de turnos, bloqueio de letras e controle do tempo, sem placar numérico de pontos.)*

---

## 🗂️ Categorias Disponíveis

A lista base (`THEMES_LIST` em `main.js`) reúne dezenas de temas variados, organizados por afinidade para facilitar partidas rápidas:

- **Comidas e Bebidas:** Frutas e Verduras, Comidas e Bebidas, Doces e Sobremesas, Bebidas Quentes ou Frias, Temperos e Ervas, Fast Food e Lanches, Queijos, Pães ou Massas.
- **Animais e Natureza:** Animais, Cachorros, Gatos ou Raças de Animais, Aves e Pássaros, Animais Marinhos, Insetos e Aracnídeos, Animais da Fazenda, Animais da Savana ou Floresta, Dinossauros ou Animais Pré-históricos, Plantas, Árvores ou Flores, Fenômenos da Natureza, Desastres Naturais ou Clima, Astros, Planetas ou Espaço.
- **Lugares e Cultura:** Países ou Cidades, Estados ou Capitais do Brasil, Praias, Rios, Montanhas ou Lugares, Monumentos ou Pontos Turísticos, Coisas que existem na praia, Feriados e Datas Comemorativas, Festas Juninas ou Culturais, Itens de Natal ou Ano Novo, Coisas de Halloween ou Terror.
- **Entretenimento e Pessoas:** Filmes ou Séries, Desenhos Animados ou Animes, Heróis e Vilões, Personagens Fictícios, Bandas ou Cantores, Músicas ou Gêneros Musicais, Danças ou Ritmos, Livros, Contos ou Autores, Jogos Eletrônicos (Videogames), Brinquedos e Jogos de Tabuleiro, Esportes, Equipamentos Esportivos, Posições, Regras ou Termos de Esportes, Times Esportivos, Profissões e suas variações.
- **Casa, Objetos e Cotidiano:** Objetos da Casa, Cômodos da Casa, Móveis e Eletrodomésticos, Ferramentas e Materiais de Construção, Peças de roupa, Calçados e Meias, Joias, Relógios e Bijuterias, Itens de Maquiagem ou Cuidados Pessoais, Produtos de Limpeza, Materiais Escolares ou de Papelaria, Peças ou Partes de um Carro, Peças ou Partes de um Computador ou Celular, Aplicativos ou Redes Sociais, Sites ou Plataformas da Internet, Meios de Transporte.
- **Características, Desafios e Rotina:** Cores ou Formas, Palavras em Inglês, Gírias ou Expressões Populares, Sentimentos e Emoções, Qualidades ou Defeitos de Alguém, Materiais, Moedas, Dinheiro ou Finanças, Unidades de Medida ou Tempo, Doenças, Sintomas ou Remédios, Cuidados com a Saúde e Bem-estar, Hábitos ou Rotinas Diárias, além de categorias criativas (como *Coisas que dão medo*, *Coisas que dão sorte*, *Coisas que fazem barulho*, *Coisas geladas*, *Verbos (Ações)* e *Coisas que cabem no bolso*).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 (`index.html`):** Estrutura da interface, modais (configuração, fim de jogo e ajuda) e `<canvas>` para a animação de confetes.
- **CSS3 (`main.css`):** Layout responsivo com CSS Grid, *media queries* para telas mobile (`<= 768px`), efeitos visuais de dessaturação (`grayscale`) nos cards travados e animações.
- **JavaScript Vanilla (`main.js`):** Lógica do jogo, sorteio de temas sem repetição recente, embaralhamento e reordenação da fila de cards, controle do cronômetro, animação de confetes no canvas e síntese sonora de tique-taque via **Web Audio API** (sem arquivos de áudio externos).

---

## 🚀 Como Executar Localmente

1. Clone o repositório ou baixe os arquivos do projeto para uma pasta no seu computador.
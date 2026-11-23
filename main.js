// Lista de temas sugeridos
const THEMES_LIST = [
    "Animais",
    "Frutas e Verduras",
    "Países ou Cidades",
    "Profissões",
    "Objetos da Casa",
    "Filmes ou Séries",
    "Comidas e Bebidas",
    "Partes do Corpo Humano",
    "Marcas Famosas",
    "Esportes",
    "Instrumentos Musicais",
    "Coisas que existem na praia",
    "Personagens Fictícios",
    "Cores ou Formas",
    "Roupas e Acessórios",
    "Meios de Transporte",
    "Verbos (Ações)",
    "Coisas geladas",
    "Doces e Sobremesas",
    "Bebidas Quentes ou Frias",
    "Temperos e Ervas",
    "Fast Food e Lanches",
    "Queijos, Pães ou Massas",
    "Cachorros, Gatos ou Raças de Animais",
    "Aves e Pássaros",
    "Animais Marinhos",
    "Insetos e Aracnídeos",
    "Animais da Fazenda",
    "Animais da Savana ou Floresta",
    "Dinossauros ou Animais Pré-históricos",
    "Plantas, Árvores ou Flores",
    "Fenômenos da Natureza",
    "Desastres Naturais ou Clima",
    "Astros, Planetas ou Espaço",
    "Estados ou Capitais do Brasil",
    "Praias, Rios, Montanhas ou Lugares",
    "Monumentos ou Pontos Turísticos",
    "Cômodos da Casa",
    "Móveis e Eletrodomésticos",
    "Ferramentas e Materiais de Construção",
    "Brinquedos e Jogos de Tabuleiro",
    "Jogos Eletrônicos (Videogames)",
    "Desenhos Animados ou Animes",
    "Heróis e Vilões",
    "Bandas ou Cantores",
    "Músicas ou Gêneros Musicais",
    "Danças ou Ritmos",
    "Livros, Contos ou Autores",
    "Palavras em Inglês",
    "Gírias ou Expressões Populares",
    "Sentimentos e Emoções",
    "Qualidades ou Defeitos de Alguém",
    "Coisas que dão medo",
    "Coisas que dão sorte",
    "Coisas que fazem barulho",
    "Coisas que têm cheiro forte",
    "Coisas redondas",
    "Coisas quadradas ou retangulares",
    "Coisas transparentes ou de vidro",
    "Coisas pegajosas ou moles",
    "Coisas duras ou pesadas",
    "Coisas leves que voam ou flutuam",
    "Coisas que usam pilha, bateria ou tomada",
    "Coisas que encontramos na escola",
    "Coisas que encontramos no escritório",
    "Coisas que encontramos no hospital ou farmácia",
    "Coisas que encontramos no supermercado",
    "Coisas que encontramos na cozinha",
    "Coisas que encontramos no banheiro",
    "Coisas que encontramos no jardim ou parque",
    "Coisas que encontramos na feira",
    "Coisas que encontramos no circo ou festa",
    "Coisas que levamos na mochila ou bolsa",
    "Coisas que levamos em viagem",
    "Coisas que cabem no bolso",
    "Coisas maiores que um carro",
    "Coisas menores que uma moeda",
    "Coisas verdes",
    "Coisas vermelhas",
    "Coisas amarelas ou laranjas",
    "Coisas azuis ou roxas",
    "Coisas pretas ou brancas",
    "Peças de roupa",
    "Calçados e Meias",
    "Joias, Relógios e Bijuterias",
    "Itens de Maquiagem ou Cuidados Pessoais",
    "Produtos de Limpeza",
    "Materiais Escolares ou de Papelaria",
    "Equipamentos Esportivos",
    "Posições, Regras ou Termos de Esportes",
    "Times Esportivos",
    "Peças ou Partes de um Carro",
    "Peças ou Partes de um Computador ou Celular",
    "Aplicativos ou Redes Sociais",
    "Sites ou Plataformas da Internet",
    "Profissões que usam uniforme",
    "Profissões que trabalham à noite",
    "Profissões ligadas à arte ou música",
    "Profissões ligadas à ciência ou saúde",
    "Feriados e Datas Comemorativas",
    "Festas Juninas ou Culturais",
    "Itens de Natal ou Ano Novo",
    "Coisas de Halloween ou Terror",
    "Mitologia, Lendas ou Criaturas Místicas",
    "Deuses, Reis ou Figuras Históricas",
    "Invenções Famosas",
    "Materiais (Madeira, Metal, Plástico, Tecido...)",
    "Moedas, Dinheiro ou Finanças",
    "Unidades de Medida ou Tempo",
    "Doenças, Sintomas ou Remédios",
    "Cuidados com a Saúde e Bem-estar",
    "Hábitos ou Rotinas Diárias",
    "Coisas que você faz antes de dormir",
    "Coisas que você faz logo ao acordar",
    "Coisas que irritam no trânsito ou dia a dia",
    "Coisas que deixam você feliz",
    "Coisas que se quebram facilmente",
    "Coisas que precisam ser abertas"
];

// Paleta vibrante para os cards
const CARD_COLORS = [
    "#e11d48", "#db2777", "#9333ea", "#7c3aed",
    "#4f46e5", "#2563eb", "#0284c7", "#0d9488",
    "#059669", "#16a34a", "#65a30d", "#ca8a04",
    "#d97706", "#ea580c", "#dc2626"
];

const FULL_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const EXCLUDED_LETTERS = ["K", "Y", "W"];

const helpModal = document.getElementById("help-modal");
const btnOpenHelp = document.getElementById("btn-open-help");
const btnCloseHelp = document.getElementById("btn-close-help");
const btnGameoverContinue = document.getElementById("btn-gameover-continue");

function openHelpModal() {
    closeThemeDropdown();
    helpModal.classList.add("active");
}

function closeHelpModal() {
    helpModal.classList.remove("active");
}

btnOpenHelp.addEventListener("click", openHelpModal);
btnCloseHelp.addEventListener("click", closeHelpModal);

// Estado do Jogo
let usedThemes = [];
let cardsState = []; // Array de objetos { letter, color, disabled }
let configuredTime = 10;
let timeLeft = 10;
let timerInterval = null;
let urgentTickTimeout = null;
let isPaused = true;
let lastIsMobile = window.innerWidth <= 768;

// --- 0. MOTOR DE SOM (WEB AUDIO API - SEM ARQUIVOS EXTERNOS) ---

let audioCtx = null;
let tickToggle = false; // Alterna entre "tic" (agudo) e "tac" (grave)

function unlockAudio() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
}

function playTickSound(isUrgent = false) {
    if (!audioCtx || audioCtx.state !== "running" || isPaused) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Alterna frequência entre "tic" e "tac" e sobe ligeiramente na reta final
    const baseFreq = isUrgent
        ? (tickToggle ? 1180 : 880)
        : (tickToggle ? 920 : 680);
    tickToggle = !tickToggle;

    osc.type = "triangle";
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.45, now + 0.045);

    const peakVolume = isUrgent ? 0.22 : 0.14;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peakVolume, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.055);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
}

function clearUrgentTickLoop() {
    if (urgentTickTimeout) {
        clearTimeout(urgentTickTimeout);
        urgentTickTimeout = null;
    }
}

// Agenda batidas mais apertadas dentro do mesmo segundo quando timeLeft <= 5
function scheduleUrgentPulsesForCurrentSecond() {
    clearUrgentTickLoop();

    if (isPaused || timeLeft <= 0 || timeLeft > 5) return;

    urgentTickTimeout = setTimeout(() => {
        if (!isPaused && timeLeft > 0 && timeLeft <= 5) {
            playTickSound(true);
        }
    }, 500);
}

// Elementos do DOM
const configModal = document.getElementById("config-modal");
const gameoverModal = document.getElementById("gameover-modal");
const themeInput = document.getElementById("theme-input");
const btnToggleDropdown = document.getElementById("btn-toggle-dropdown");
const themeDropdown = document.getElementById("theme-dropdown");
//const themeSelect = document.getElementById("theme-select");
const timeInput = document.getElementById("time-input");
const removeKywCheckbox = document.getElementById("remove-kyw-checkbox");
const currentThemeDisplay = document.getElementById("current-theme-display");
const cardsGrid = document.getElementById("cards-grid");
const gameoverTitle = document.getElementById("gameover-title");
const gameoverSubtitle = document.getElementById("gameover-subtitle");

// --- 1. GERENCIAMENTO DE TEMAS ---

function getRandomTheme() {
    let available = THEMES_LIST.filter(theme => !usedThemes.includes(theme));

    if (available.length === 0) {
        usedThemes = [];
        available = [...THEMES_LIST];
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const chosenTheme = available[randomIndex];
    usedThemes.push(chosenTheme);

    return chosenTheme;
}

// --- 2. EMBARALHAMENTO E RENDERIZAÇÃO DOS CARDS ---

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function buildCardsDeck() {
    const removeKYW = removeKywCheckbox.checked;
    const letters = removeKYW
        ? FULL_ALPHABET.filter(l => !EXCLUDED_LETTERS.includes(l))
        : [...FULL_ALPHABET];

    const shuffledLetters = shuffleArray(letters);

    cardsState = shuffledLetters.map((letter, index) => ({
        letter,
        color: CARD_COLORS[index % CARD_COLORS.length],
        disabled: false
    }));

    renderCards();
}

function createTimerElement() {
    const slot = document.createElement("div");
    slot.className = "timer-slot";

    const circle = document.createElement("div");
    circle.id = "timer-circle";
    circle.className = `timer-circle ${timeLeft <= 5 && timeLeft > 0 ? "danger" : ""}`;

    const value = document.createElement("span");
    value.id = "timer-value";
    value.textContent = timeLeft;

    circle.appendChild(value);
    slot.appendChild(circle);
    return slot;
}

function renderCards() {
    cardsGrid.innerHTML = "";

    const isMobile = window.innerWidth <= 768;
    const centerIndex = isMobile ? 4 : 12;

    cardsState.forEach((cardObj, index) => {
        if (index === centerIndex) {
            cardsGrid.appendChild(createTimerElement());
        }

        const btn = document.createElement("button");
        btn.className = `letter-card ${cardObj.disabled ? "disabled" : ""}`;
        btn.style.backgroundColor = cardObj.color;
        btn.textContent = cardObj.letter;
        btn.disabled = cardObj.disabled;

        btn.addEventListener("click", () => handleCardClick(cardObj.letter));
        cardsGrid.appendChild(btn);
    });
}

function handleCardClick(clickedLetter) {
    if (isPaused) return;
    unlockAudio();

    const cardIndex = cardsState.findIndex(c => c.letter === clickedLetter);
    if (cardIndex === -1 || cardsState[cardIndex].disabled) return;

    const [clickedCard] = cardsState.splice(cardIndex, 1);
    clickedCard.disabled = true;
    cardsState.push(clickedCard);

    renderCards();

    const allCompleted = cardsState.every(c => c.disabled);
    if (allCompleted) {
        handleVictory();
        return;
    }

    resetTimer();
}

// --- 3. CONTROLE DO CRONÔMETRO ---

function updateTimerUI() {
    const timerCircle = document.getElementById("timer-circle");
    const timerValue = document.getElementById("timer-value");
    if (!timerCircle || !timerValue) return;

    timerValue.textContent = timeLeft;
    if (timeLeft <= 5 && timeLeft > 0) {
        timerCircle.classList.add("danger");
    } else {
        timerCircle.classList.remove("danger");
    }
}

function startTimer() {
    stopTimer();
    isPaused = false;
    tickToggle = false;
    updateTimerUI();

    timerInterval = setInterval(() => {
        if (isPaused) return;

        timeLeft--;
        if (!isPaused && timeLeft > 0 && timeLeft <= 5) scheduleUrgentPulsesForCurrentSecond();        
        updateTimerUI();

        if (timeLeft <= 0) {
            stopTimer();
            handleTimeOut();
            return;
        }

        const isUrgent = timeLeft <= 5;
        playTickSound(isUrgent);

        if (isUrgent) {
            scheduleUrgentPulsesForCurrentSecond();
        } else {
            clearUrgentTickLoop();
        }
    }, 1000);
}

function resetTimer() {
    clearUrgentTickLoop();
    timeLeft = configuredTime;
    updateTimerUI();
    if (!isPaused && timeLeft > 0 && timeLeft <= 5) {
        scheduleUrgentPulsesForCurrentSecond();
    }
}

function stopTimer() {
    isPaused = true;
    clearUrgentTickLoop();
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// --- 4. FLUXO DE TELAS E FIM DE JOGO ---

function continueGame() {
    unlockAudio();
    gameoverModal.classList.remove("active");
    resetTimer();
    startTimer();
}
btnGameoverContinue.addEventListener("click", continueGame);

function openConfigModal() {
    stopTimer();
    gameoverModal.classList.remove("active");
    configModal.classList.add("active");
}

function startGame(useNewRandomTheme = false) {
    closeThemeDropdown();
    unlockAudio();

    if (useNewRandomTheme) {
        themeInput.value = getRandomTheme();
        //themeSelect.value = getRandomTheme();
    }

    //const chosenTheme = themeInput.value.trim() || getRandomTheme();
    //themeInput.value = chosenTheme;
    //const chosenTheme = themeSelect.value.trim() || getRandomTheme();
    //themeSelect.value = chosenTheme;    
    const chosenTheme = themeInput.value.trim() || getRandomTheme();
    themeInput.value = chosenTheme;    
    currentThemeDisplay.textContent = chosenTheme;

    const parsedTime = parseInt(timeInput.value, 10);
    configuredTime = (!isNaN(parsedTime) && parsedTime >= 1) ? parsedTime : 10;
    timeInput.value = configuredTime;

    configModal.classList.remove("active");
    gameoverModal.classList.remove("active");

    buildCardsDeck();
    resetTimer();
    startTimer();
}

function handleTimeOut() {
    gameoverTitle.textContent = "Tempo esgotado!";
    gameoverSubtitle.textContent = "Ninguém respondeu a tempo.";
    btnGameoverContinue.style.display = "";
    gameoverModal.classList.add("active");
}

function handleVictory() {
    stopTimer();
    triggerConfetti(3000);
    gameoverTitle.textContent = "Uau, vocês venceram!";
    gameoverSubtitle.textContent = "Todas as letras do alfabeto foram completadas!";
    btnGameoverContinue.style.display = "none";
    gameoverModal.classList.add("active");
}

// --- 5. ANIMAÇÃO DE CONFETES (3 SEGUNDOS) ---

function triggerConfetti(durationMs) {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 130;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 6,
            h: Math.random() * 6 + 4,
            color: CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)],
            speedY: Math.random() * 4 + 3,
            speedX: Math.random() * 2 - 1,
            angle: Math.random() * 360,
            spin: Math.random() * 6 - 3
        });
    }

    const startTime = performance.now();

    function animate(now) {
        const elapsed = now - startTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.angle += p.spin;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.angle * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        if (elapsed < durationMs) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    requestAnimationFrame(animate);
}

// --- 6. EVENT LISTENERS E INICIALIZAÇÃO ---

document.getElementById("btn-roll-theme").addEventListener("click", () => {
    unlockAudio();
    //themeInput.value = getRandomTheme(); 
    themeSelect.value = getRandomTheme();
});

document.getElementById("btn-start-game").addEventListener("click", () => {
    startGame(false);
});

document.getElementById("btn-home-header").addEventListener("click", openConfigModal);
document.getElementById("btn-gameover-home").addEventListener("click", openConfigModal);

document.getElementById("btn-gameover-restart").addEventListener("click", () => {
    startGame(true);
});

window.addEventListener("resize", () => {
    const currentIsMobile = window.innerWidth <= 768;
    if (currentIsMobile !== lastIsMobile) {
        lastIsMobile = currentIsMobile;
        renderCards();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    //themeInput.value = getRandomTheme();
    //currentThemeDisplay.textContent = themeInput.value;
    //populateThemeSelect();
    const initialTheme = getRandomTheme();
    //themeSelect.value = initialTheme;
    themeInput.value = initialTheme;
    currentThemeDisplay.textContent = initialTheme;    
    renderThemeDropdown(initialTheme, true);
    buildCardsDeck();
    resetTimer();
});

/*
function populateThemeSelect() {
    themeSelect.innerHTML = "";
    THEMES_LIST.forEach((theme) => {
        const option = document.createElement("option");
        option.value = theme;
        option.textContent = theme;
        themeSelect.appendChild(option);
    });
}
*/

function renderThemeDropdown(filterText = "", showAll = false) {
    themeDropdown.innerHTML = "";
    const normalized = filterText.trim().toLowerCase();

    const filtered = showAll || !normalized
        ? THEMES_LIST
        : THEMES_LIST.filter((theme) => theme.toLowerCase().includes(normalized));

    if (filtered.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.className = "combobox-empty";
        emptyItem.textContent = "Tema personalizado será usado ao iniciar";
        themeDropdown.appendChild(emptyItem);
        return;
    }

    filtered.forEach((theme) => {
        const li = document.createElement("li");
        li.className = "combobox-option";
        if (theme === themeInput.value) {
            li.classList.add("selected");
        }
        li.setAttribute("role", "option");
        li.textContent = theme;

        li.addEventListener("click", () => {
            themeInput.value = theme;
            closeThemeDropdown();
        });

        themeDropdown.appendChild(li);
    });
}

function openThemeDropdown(showAll = true) {
    renderThemeDropdown(themeInput.value, showAll);
    themeDropdown.classList.add("open");
}

function closeThemeDropdown() {
    themeDropdown.classList.remove("open");
}

btnToggleDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    if (themeDropdown.classList.contains("open")) {
        closeThemeDropdown();
    } else {
        openThemeDropdown(true);
        themeInput.focus();
    }
});

themeInput.addEventListener("input", () => {
    openThemeDropdown(false);
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".combobox-wrapper")) {
        closeThemeDropdown();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && helpModal.classList.contains("active")) {
        closeHelpModal();
    }
});
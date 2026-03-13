// ── WORD LISTS BY CATEGORY ──
const CATEGORIES = {
    series: {
        label: 'Series y Películas',
        icon: '🎬',
        words: [
            'Breaking Bad', 'Game of Thrones', 'El Padrino', 'Titanic', 'Avatar',
            'Stranger Things', 'The Office', 'Friends', 'Pulp Fiction', 'Interstellar',
            'Jurassic Park', 'El Señor de los Anillos', 'Harry Potter', 'Star Wars',
            'Jefe en Pañales', 'Peaky Blinders', 'Vikingos', 'Dark',
            'Los Soprano', 'Shrek', 'Dragon Ball Z', 'Better Call Saul', 'Seven', 'Scarface',
            'The Last of Us', 'Oppenheimer', 'Barbie', 'Top Gun', 'Spider-Man',
            'El Rey León', 'American Pie', 'Toy Story', 'Matrix', 'Forrest Gump',
            'Succession', 'House of the Dragon', 'Wednesday', 'Euphoria', 'Chernobyl',
            'Ozark', 'Narcos', 'The Bear', 'White Lotus', 'Severance',
            'Fallout', 'Shogun', 'Dune', 'La Sustancia', 'Wicked',
            'Conclave', 'Anora', 'Bitelchus Bitelchus', 'Alien: Romulus', 'Squid Game'
        ]
    },
    futbol: {
        label: 'Fútbol',
        icon: '⚽',
        words: [
            'Lionel Messi', 'Cristiano Ronaldo', 'Mbappé', 'Erling Haaland', 'Vinicius Jr',
            'Neymar', 'Lamine Yamal', 'Pedri', 'Gavi', 'Rodri',
            'Jude Bellingham', 'Mohamed Salah', 'Karim Benzema', 'Robert Lewandowski', 'Luka Modric',
            'Kevin De Bruyne', 'Alisson', 'Courtois', 'Ter Stegen', 'Oblak',
            'Virgil Van Dijk', 'Rúben Dias', 'Eder Militao', 'Marquinhos', 'Theo Hernández',
            'Phil Foden', 'Bukayo Saka', 'Ollie Watkins', 'Darwin Núñez', 'Victor Osimhen',
            'Adrien Rabiot', 'Paulo Dybala', 'Lautaro Martínez', 'Julián Álvarez', 'Enzo Fernández',
            'Rodrigo De Paul', 'Alexis Mac Allister', 'Thiago Almada', 'Valentín Carboni', 'Alejandro Garnacho',
            'Ansu Fati', 'Ferran Torres', 'Álvaro Morata', 'Dani Carvajal', 'Trent Alexander-Arnold',
            'Diogo Jota', 'Cody Gakpo', 'Federico Valverde', 'Eduardo Camavinga', 'Jamal Musiala'
        ]
    },
    musica: {
        label: 'Música',
        icon: '🎵',
        words: [
            'Taylor Swift', 'Bad Bunny', 'The Beatles', 'Michael Jackson', 'Madonna',
            'Coldplay', 'Radiohead', 'Daft Punk', 'Beyoncé', 'Eminem',
            'Queen', 'AC/DC', 'Metallica', 'Pink Floyd', 'Led Zeppelin',
            'Shakira', 'Rihanna', 'Drake', 'Kanye West', 'Adele',
            'Bizarrap', 'Peso Pluma', 'Karol G', 'Rauw Alejandro', 'J Balvin',
            'Gustavo Cerati', 'Charly García', 'Fito Páez', 'Los Redondos', 'Divididos',
            'Billie Eilish', 'Harry Styles', 'The Weeknd', 'Post Malone', 'Dua Lipa',
            'Sabrina Carpenter', 'Olivia Rodrigo', 'SZA', 'Kendrick Lamar', 'Tyler The Creator',
            'Frank Ocean', 'Arctic Monkeys', 'Tame Impala', 'The Strokes', 'Gorillaz',
            'Rosalía', 'Anitta', 'Myke Towers', 'Feid', 'Nicki Nicole',
            'Wos', 'Paulo Londra', 'Trueno', 'Ca7riel', 'Paco Amoroso'
        ]
    },
    escuela: {
        label: 'Escuela',
        icon: '🏫',
        words: [
            'Nicolás Lagreca', 'Marina Grilli', 'Soledad (Biologia)', 'Parisi', 'Pablo Rozen',
            'Padre Carlos', 'Pablo Hierro', 'Pablo Perez', 'Tio Charlie', 'De Rito',
            'Taverna', 'Dani (Geografia Polonia)', 'Nachito', 'Alicia (Matemáticas)', 'Naty (Quimica)',
            'Osqui (Fisica)', 'Lolito', 'Ezequiel (profesor)', 'Himan', 'Marcia',
            'Martin Pelado', 'Martin con Pelo', 'Pablo Soasnavar (Buzz Lightyear)', 'Mari Cristi', 'Suzi (Geografia)',
            'German Gil (Historia)', 'Duilio', 'Fabian (Inglés)', 'Mariano (Inglés)', 'Vanessa (Inglés)',
            'Paula (Ed Fisica)', 'La Moni', 'Emilio (Música)', 'Kuperman (Arte)', 'Soto',
            'Brian', 'Tapia', 'Maiorano', 'Joaquin Doldán', 'Chulo',
            'Lichu', 'Mata', 'Chiara', 'Lola', 'Catalina',
            'Sofia', 'Gina', 'Alan', 'Juli Bossi', 'Angie',
            'Tiago', 'Leandro Fornasari', 'Agustin Romero', 'Juan Cruz', 'Pancho',
            'Pety', 'Enzo', 'Maxi', 'Agus Lonero', 'Martina',
            'Mariela', 'Aytana', 'Florpuc', 'Isabela', 'Renata',
            'Maria Gancio', 'Maria Candela', 'Juliana Guerra', 'Malena', 'Celeste Gonzalez',
            'Santiago Vio', 'Leandro Godoy', 'Julieta Amaya', 'Candela Esposito', 'Lucia Skrbec',
            'Olivia Bisso', 'Mateo Pugliese', 'Baltazar Masivo Bro'
        ]
    },
    paises: {
        label: 'Países',
        icon: '🌍',
        words: [
            'Argentina', 'Brasil', 'Estados Unidos', 'Francia', 'España',
            'Alemania', 'Italia', 'Reino Unido', 'Japón', 'China',
            'México', 'Canadá', 'Australia', 'Rusia', 'India',
            'Corea del Sur', 'Países Bajos', 'Portugal', 'Suecia', 'Noruega',
            'Suiza', 'Bélgica', 'Polonia', 'Turquía', 'Arabia Saudita',
            'Emiratos Árabes', 'Sudáfrica', 'Nigeria', 'Egipto', 'Marruecos',
            'Colombia', 'Chile', 'Perú', 'Uruguay', 'Venezuela',
            'Cuba', 'Ecuador', 'Paraguay', 'Bolivia', 'Costa Rica',
            'Grecia', 'Hungría', 'República Checa', 'Dinamarca', 'Finlandia',
            'Israel', 'Irán', 'Pakistán', 'Tailandia', 'Indonesia'
        ]
    },
    famosos: {
        label: 'Famosos',
        icon: '⭐',
        words: [
            'Leonardo DiCaprio', 'Brad Pitt', 'Angelina Jolie', 'Tom Hanks', 'Meryl Streep',
            'Scarlett Johansson', 'Robert Downey Jr', 'Chris Evans', 'Dwayne Johnson', 'Will Smith',
            'Johnny Depp', 'Tom Cruise', 'Keanu Reeves', 'Ryan Reynolds', 'Margot Robbie',
            'Zendaya', 'Timothée Chalamet', 'Ana de Armas', 'Sydney Sweeney', 'Pedro Pascal',
            'Elvis Presley', 'David Bowie', 'Kurt Cobain', 'Bruce Springsteen', 'Elton John',
            'Bob Dylan', 'Mick Jagger', 'Freddie Mercury', 'Justin Bieber', 'Ariana Grande',
            'Michael Jordan', 'LeBron James', 'Usain Bolt', 'Roger Federer', 'Rafael Nadal',
            'Novak Djokovic', 'Serena Williams', 'Simone Biles', 'Kobe Bryant', 'Tiger Woods',
            'Elon Musk', 'Bill Gates', 'Jeff Bezos', 'Mark Zuckerberg', 'Steve Jobs',
            'Oprah Winfrey', 'Kim Kardashian', 'Kylie Jenner', 'Paris Hilton', 'Lady Gaga',
            'Barack Obama', 'Donald Trump', 'Vladimir Putin', 'Papa Francisco', 'Dalai Lama',
            'Nelson Mandela', 'Albert Einstein', 'Stephen Hawking', 'Nikola Tesla', 'Charles Darwin',
            'MrBeast', 'PewDiePie', 'Ibai Llanos', 'TheGrefg', 'Luisito Comunica',
            'Susana Giménez', 'Mirtha Legrand', 'Ricardo Darín', 'Guillermo Francella', 'Marcelo Tinelli',
            'Natalia Oreiro', 'Florencia Peña', 'Marley', 'Napoleon Bonaparte', 'Cleopatra',
            'Mahatma Gandhi', 'Martin Luther King', 'Marie Curie', 'Isaac Newton', 'Leonardo Da Vinci',
            'Julio Cesar', 'Winston Churchill', 'Adolf Hitler', 'Pokimane', 'Ninja',
            'Jorge Lanata', 'Lizy Tagliani', 'Werevertumorro', 'Markiplier', 'Jacksepticeye'
        ]
    },
    videojuegos: {
        label: 'Videojuegos',
        icon: '🎮',
        words: [
            'Minecraft', 'Fortnite', 'Grand Theft Auto V', 'The Legend of Zelda', 'Super Mario Bros',
            'Red Dead Redemption', 'The Witcher 3', 'God of War', 'Elden Ring', 'Dark Souls',
            'Counter-Strike', 'Valorant', 'League of Legends', 'Dota 2', 'Overwatch',
            'Call of Duty', 'Halo', 'FIFA', 'NBA 2K', 'Rocket League',
            'Among Us', 'Fall Guys', 'Stardew Valley', 'Hollow Knight', 'Celeste',
            'The Last of Us', 'Ghost of Tsushima', 'Horizon Zero Dawn', 'Death Stranding', 'Cyberpunk 2077',
            'Pokémon', 'Diablo IV', 'World of Warcraft', 'Hearthstone', 'Candy Crush',
            'Angry Birds', 'Clash of Clans', 'Subway Surfers', 'Temple Run', 'Geometry Dash',
            'Resident Evil', 'Silent Hill', 'Metal Gear Solid', 'Street Fighter', 'Mortal Kombat',
            'Tetris', 'Pac-Man', 'Sonic', 'Donkey Kong', 'Space Invaders'
        ]
    },
    objetos: {
        label: 'Objetos',
        icon: '🪄',
        words: [
            'Calzoncillo roto', 'Dentadura postiza', 'Peluca de abuela', 'Sombrero de fiesta', 'Chancla voladora',
            'Tupper sin tapa', 'Bidet', 'Inodoro de oro', 'Gorra de baño', 'Muñeco de vudú',
            'Cuadro de payaso', 'Colchón inflable', 'Balde de colores', 'Anteojos de sol enormes', 'Pelota pinchada',
            'Control remoto roto', 'Tapón de bañera', 'Detector de mentiras', 'Cinturón de castidad', 'Esposas rosas',
            'Vibrador', 'Pipa de agua', 'Bong decorativo', 'Monóculo', 'Látigo de cuero',
            'Corset', 'Máquina de escribir', 'Teléfono a disco', 'Televisor con antena', 'Enciclopedia Larousse',
            'Cassette de música', 'Panfleto político', 'Biblia gigante', 'Naipes marcados', 'Muñeca inflable',
            'Queso gigante', 'Cactus en el baño', 'Hamaca paraguaya', 'Trono de cartón', 'Traje de gorila',
            'Guitarra sin cuerdas', 'Pelota de playa en el metro', 'Patines de 4 ruedas', 'Osito de peluche gigante', 'Caricatura del jefe',
            'Espejo que te hace gordo', 'Estatuilla de yeso', 'Peineta enorme', 'Arma de juguete que parece real', 'Tenedor de palo'
        ]
    },
    animales: {
        label: 'Animales',
        icon: '🐾',
        words: [
            'Perro', 'Gato', 'Conejo', 'Hámster', 'Loro',
            'Canario', 'Tortuga', 'Pez dorado', 'Cobayo', 'Iguana',
            'Vaca', 'Caballo', 'Cerdo', 'Gallina', 'Oveja',
            'Cabra', 'Burro', 'Toro', 'Pato', 'Ganso',
            'León', 'Elefante', 'Jirafa', 'Cebra', 'Hipopótamo',
            'Rinoceronte', 'Guepardo', 'Leopardo', 'Gorila', 'Chimpancé',
            'Tiburón', 'Delfín', 'Ballena', 'Pulpo', 'Calamar gigante',
            'Medusa', 'Caballito de mar', 'Mantarraya', 'Tortuga marina', 'Estrella de mar',
            'Águila', 'Búho', 'Pingüino', 'Flamenco', 'Tucán',
            'Colibrí', 'Pelícano', 'Cóndor', 'Avestruz', 'Pavo real',
            'Ornitorrinco', 'Koala', 'Canguro', 'Wombat', 'Tapir',
            'Capibara', 'Armadillo', 'Oso hormiguero', 'Pangolín', 'Mantis religiosa'
        ]
    }
};

const AVATARS = ['🧑','👦','🧔','👩','🧑‍🦱','🧑‍🦰','👴','🧒','🧑‍🦳','🧑‍🦲'];

// ── STATE ──
let state = {
    total: 5,
    impostores: 1,
    category: 'futbol',
    names: [],
    roles: [],
    order: [],
    word: '',
    current: 0
};

// ── UTILS ──
const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ── CATEGORY SELECTION ──
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.category = btn.dataset.cat;
    });
});

// ── SCREEN 1 → 2 ──
$('btnSetupNext').addEventListener('click', () => {
    const cant = parseInt($('inputCantidad').value);
    const imp  = parseInt($('inputImpostores').value);
    if (isNaN(cant) || cant < 3) { alert('Mínimo 3 participantes'); return; }
    if (isNaN(imp) || imp < 1 || imp >= cant) { alert('Número de impostores inválido'); return; }

    state.total      = cant;
    state.impostores = imp;

    const grid = $('namesGrid');
    grid.innerHTML   = '';
    for (let i = 0; i < cant; i++) {
        grid.innerHTML += `
            <div class="name-row">
                <span class="name-num">${i + 1}</span>
                <input type="text" class="name-input" placeholder="Jugador ${i + 1}" maxlength="20">
            </div>`;
    }
    showScreen('screen-names');
    grid.querySelector('input').focus();
});

$('btnBackSetup').addEventListener('click', () => showScreen('screen-setup'));

// ── SCREEN 2 → 3 ──
$('btnStartGame').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.name-input');
    const names  = [];
    for (const inp of inputs) {
        const v = inp.value.trim();
        if (!v) { alert('Completá todos los nombres'); inp.focus(); return; }
        names.push(v);
    }
    state.names = names;
    startGameWithCurrentState();
});

// ── GAME INIT ──
function startGameWithCurrentState() {
    const pool   = CATEGORIES[state.category].words;
    state.word   = pool[Math.floor(Math.random() * pool.length)];

    const indices     = shuffle([...Array(state.total).keys()]);
    const impostorSet = new Set(indices.slice(0, state.impostores));
    state.roles       = state.names.map((_, i) => impostorSet.has(i) ? 'impostor' : 'word');
    state.order       = shuffle([...Array(state.total).keys()]);
    state.current     = 0;

    showRevealStep();
    showScreen('screen-reveal');
}

// ── REVEAL ──
function showRevealStep() {
    const idx  = state.order[state.current];
    const name = state.names[idx];
    const pct  = (state.current / state.total) * 100;
    const cat  = CATEGORIES[state.category];

    $('progressBar').style.width     = pct + '%';
    $('progressLabel').textContent   = `${state.current + 1} / ${state.total}`;
    $('revealName').textContent      = name;
    $('revealAvatar').textContent    = AVATARS[idx % AVATARS.length];
    $('revealPrompt').textContent    = 'Mirá tu palabra cuando estés listo';
    $('revealCatBadge').innerHTML    = `<span class="icon">${cat.icon}</span>${cat.label}`;

    $('wordReveal').style.display    = 'none';
    $('btnShowWord').style.display   = 'block';
    $('btnNext').style.display       = 'none';
}

$('btnShowWord').addEventListener('click', () => {
    const idx  = state.order[state.current];
    const role = state.roles[idx];
    const box  = $('wordBox');
    const hint = $('wordHint');

    if (role === 'impostor') {
        box.className   = 'word-box impostor';
        box.textContent = 'IMPOSTOR';
        hint.textContent = '¡Sos el impostor! Intentá descubrir la palabra y pasar desapercibido.';
    } else {
        box.className   = 'word-box word';
        box.textContent = state.word.toUpperCase();
        hint.textContent = 'Esa es la palabra secreta. ¡No la digas directamente!';
    }

    $('wordReveal').style.display  = 'block';
    $('revealPrompt').textContent  = '';
    $('btnShowWord').style.display = 'none';
    $('btnNext').style.display     = 'block';

    const isLast = state.current === state.total - 1;
    $('btnNext').textContent = isLast ? '¡Listo! 🎮' : 'Siguiente →';
});

$('btnNext').addEventListener('click', () => {
    state.current++;
    if (state.current >= state.total) {
        showDoneScreen();
    } else {
        showRevealStep();
    }
});

// ── DONE ──
function showDoneScreen() {
    const cat = CATEGORIES[state.category];
    const imp = state.roles.filter(r => r === 'impostor').length;

    $('gameChips').innerHTML = `
        <span class="chip">👥 ${state.total} jugadores</span>
        <span class="chip">🕵️ ${imp} impostor${imp > 1 ? 'es' : ''}</span>
        <span class="chip">${cat.icon} ${cat.label}</span>
        <span class="chip">🔑 Palabra oculta</span>`;

    $('finalWord').style.display          = 'none';
    $('finalImpostors').innerHTML         = '';
    $('btnRevealWord').style.display      = 'block';
    $('btnRevealImpostors').style.display = 'block';
    showScreen('screen-done');
}

$('btnRevealWord').addEventListener('click', () => {
    $('finalWordText').textContent   = state.word.toUpperCase();
    $('finalWord').style.display     = 'block';
    $('btnRevealWord').style.display = 'none';
});

$('btnRevealImpostors').addEventListener('click', () => {
    const list = $('finalImpostors');
    list.innerHTML = state.names
        .map((name, i) => state.roles[i] === 'impostor'
            ? `<div class="impostor-item">
                   <span>🕵️</span>
                   <span class="name">${name}</span>
                   <span class="badge">Impostor</span>
               </div>` : '')
        .join('');
    $('btnRevealImpostors').style.display = 'none';
});

$('btnPlayAgainSame').addEventListener('click', startGameWithCurrentState);
$('btnPlayAgainNew').addEventListener('click', () => showScreen('screen-setup'));
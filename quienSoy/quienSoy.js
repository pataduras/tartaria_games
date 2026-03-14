const AVATARS = ['🧑','👦','🧔','👩','🧑‍🦱','🧑‍🦰','👴','🧒','🧑‍🦳','🧑‍🦲','🧑‍🎤','🧑‍🚀'];

let state = { total: 4, names: [], chars: [], current: 0 };

const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
}

// ── SETUP → NOMBRES ──
$('btnSetupNext').addEventListener('click', () => {
    const n = parseInt($('inputPlayers').value);
    if (isNaN(n) || n < 2) { alert('Mínimo 2 jugadores'); return; }
    state.total = n;

    const grid = $('namesGrid');
    grid.innerHTML = '';
    for (let i = 0; i < n; i++) {
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

// ── NOMBRES → ASIGNAR ──
$('btnToAssign').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.name-input');
    const names  = [];
    for (const inp of inputs) {
        const v = inp.value.trim();
        if (!v) { alert('Completá todos los nombres'); inp.focus(); return; }
        names.push(v);
    }
    state.names  = names;
    state.chars  = new Array(state.total).fill('');
    state.current = 0;
    showAssignStep();
    showScreen('screen-assign');
});

// ── ASIGNAR STEP ──
function showAssignStep() {
    const pct = (state.current / state.total) * 100;
    $('progressBar').style.width    = pct + '%';
    $('progressLabel').textContent  = `${state.current + 1} / ${state.total}`;
    $('turnName').textContent       = state.names[state.current];
    $('turnAvatar').textContent     = AVATARS[state.current % AVATARS.length];
    $('turnSub').textContent        = `La persona a tu izquierda escribe un personaje para ${state.names[state.current]}`;

    $('charReveal').style.display   = 'none';
    $('charInput').style.display    = 'none';
    $('charInput').value            = '';
    $('btnEnterChar').style.display = 'block';
    $('btnEnterChar').textContent   = 'Ingresar personaje ✏️';
    $('btnConfirmChar').style.display = 'none';

    // Reset listener
    $('btnEnterChar').onclick = enterCharHandler;
}

function enterCharHandler() {
    $('charInput').style.display    = 'block';
    $('btnEnterChar').style.display = 'none';
    $('btnConfirmChar').style.display = 'block';
    $('charInput').focus();
}

$('btnEnterChar').addEventListener('click', enterCharHandler);

$('btnConfirmChar').addEventListener('click', () => {
    const v = $('charInput').value.trim();
    if (!v) { alert('Escribí un personaje'); return; }

    state.chars[state.current] = v;
    $('charBox').textContent         = v.toUpperCase();
    $('charReveal').style.display    = 'block';
    $('charInput').style.display     = 'none';
    $('btnConfirmChar').style.display = 'none';

    const isLast = state.current === state.total - 1;
    $('btnEnterChar').style.display  = 'block';
    $('btnEnterChar').textContent    = isLast ? '¡Listo! A jugar 🎮' : 'Siguiente →';
    $('btnEnterChar').onclick = () => {
        state.current++;
        if (state.current >= state.total) {
            showPlayScreen();
        } else {
            showAssignStep();
        }
    };
});

// ── PLAY SCREEN ──
function showPlayScreen() {
    const list = $('playersList');
    list.innerHTML = state.names.map((name, i) => `
        <div class="player-row" id="prow-${i}">
            <span class="avatar">${AVATARS[i % AVATARS.length]}</span>
            <div class="info">
                <div class="pname">${name}</div>
                <div class="char-hidden" id="charlabel-${i}">Personaje oculto</div>
            </div>
            <button class="reveal-btn-sm" onclick="revealChar(${i})">Revelar 👁</button>
        </div>`).join('');
    showScreen('screen-play');
}

function revealChar(i) {
    $(`charlabel-${i}`).textContent = state.chars[i];
    $(`charlabel-${i}`).className   = 'char-label';
    const btn = $(`prow-${i}`).querySelector('.reveal-btn-sm');
    btn.textContent = '✓ Revelado';
    btn.className   = 'reveal-btn-sm revealed';
    btn.disabled    = true;
}

$('btnNewGame').addEventListener('click', () => {
    state.chars   = new Array(state.total).fill('');
    state.current = 0;
    showAssignStep();
    showScreen('screen-assign');
});

$('btnFromScratch').addEventListener('click', () => showScreen('screen-setup'));
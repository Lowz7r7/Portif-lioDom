const form = document.getElementById('briefingForm');
const storageKey = 'briefingDados';

function preencherCampos(dados) {
    Object.entries(dados).forEach(([name, value]) => {
        const field = form.elements.namedItem(name);

        if (!field) return;

        if (field.type === 'radio') {
            const radio = form.querySelector(`input[name="${name}"][value="${value}"]`);
            if (radio) radio.checked = true;
        } else {
            field.value = value;
        }
    });
}

function carregarDados() {
    try {
        const dadosSalvos = JSON.parse(localStorage.getItem(storageKey) || '{}');
        preencherCampos(dadosSalvos);
    } catch (error) {
        console.error('Erro ao carregar dados do briefing:', error);
    }
}

function salvarDados(event) {
    event.preventDefault();

    try {
        const dados = Object.fromEntries(new FormData(form).entries());
        localStorage.setItem(storageKey, JSON.stringify(dados));
        alert('Informações salvas no navegador.');
    } catch (error) {
        console.error('Erro ao salvar dados do briefing:', error);
        alert('Não foi possível salvar as informações.');
    }
}

if (form) {
    carregarDados();
    form.addEventListener('submit', salvarDados);
}

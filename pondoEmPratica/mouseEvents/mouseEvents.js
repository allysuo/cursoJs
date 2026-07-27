const area = window.document.getElementById('areaTeste')
const textoPrincipal = window.document.getElementById('texto-principal')

function piscarNomeEvento(idEvento, classeCor) {
    const evento = window.document.getElementById(idEvento);
    evento.classList.add(classeCor) /* Até aqui ele pega um evento que ocorreu e coloca uma cor, sem tirá-la. */

    setTimeout(() => {
        evento.classList.remove(classeCor);
    }, 300)
}

area.addEventListener('mouseenter', () => {
    area.style.background = "#4391c5";
    textoPrincipal.innerText = 'O mouse entrou!';
    piscarNomeEvento('idmouseenter', 'ativaCor')
});

area.addEventListener('mouseout', () => {
    area.style.background = "#2c3e50";
    textoPrincipal.innerText = 'O mouse saiu!';
    piscarNomeEvento('idmouseout', 'ativaCor')
});

area.addEventListener('click', () => {
    area.style.background = "#541fb8"
    textoPrincipal.innerText = 'Você clicou!';
    piscarNomeEvento('idclick', 'ativaClick')
});

area.addEventListener('dblclick', () => {
    area.style.background = "#bd0bbd"
    textoPrincipal.innerText = 'Você deu dois cliques!';
    piscarNomeEvento('iddblclick', 'ativaDblClick')
});


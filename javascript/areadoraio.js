// Função para calcular a área do raio
document.getElementById('calcular-btn').addEventListener('click', function() {
    const raio = document.getElementById('raio').value;
    const pi = document.getElementById('pi').value;

    if (raio) {
        const areaRaio = Number(pi * (raio ** 2)).toFixed(2);
        document.getElementById('resultado').textContent = `Área total do raio: ${areaRaio} m²`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, preencha o campos vazio';
    }
});
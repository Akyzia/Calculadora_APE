document.getElementById('calcular-ate-btn').addEventListener('click', function() {
    const grid = Number(document.getElementById('grid').value);
    const centroides = Number(document.getElementById('centroides').value);
    
    if (!grid || !centroides || grid <= 0 || centroides <= 0) {
        document.getElementById('resultado-ate').textContent = 'Por favor, preencha os campos vazios';
        return;
    }

    const ate = grid * centroides; // Cálculo da área total edificada (ATE)
    document.getElementById('resultado-ate').textContent = `Área total edificada (ATE): ${ate} m²`;
});

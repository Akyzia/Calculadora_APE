

//Adicionando um Event Listener ao botão "Calcular APE"
//Aqui, adicionamos um event listener que será executado quando o botão de cálculo for clicado. 
//Ele escuta o evento de clique no botão com o ID calcular-ape-btn e executa a função anônima 
//que está dentro das chaves {}.
document.getElementById('calcular-ape-btn').addEventListener('click', function() {
    // Capturando os valores de entrada
    const raio = Number(document.getElementById('raio').value);
    const pi = Number(document.getElementById('pi').value);
    const grid = Number(document.getElementById('grid').value);
    const centroides = Number(document.getElementById('centroides').value);
    const percentual = Number(document.getElementById('percentual').value) / 100; // Percentual convertido para decimal
   
//Validação dos valores de entrada
//O código verifica se algum valor não foi inserido ou é inválido 
//(por exemplo, se o raio, grid, centroides ou percentual forem 0 ou negativos).
//Se alguma condição inválida for detectada, a mensagem 
//"Por favor, insira valores válidos para todos os campos." será exibida na página, e a 
//função é interrompida com return.
    if (!raio || !grid || !centroides || !percentual || raio <= 0 || grid <= 0 || centroides <= 0 || percentual <= 0 || percentual > 1) {
        document.getElementById('resultado-ape').textContent = 'Por favor, preencha os campos vazios';
        return;
    }
    
//Cálculo da área total do círculo
    const areaTotal = pi * raio ** 2;
//Cálculo da área total edificada (ATE)
    const ate = centroides * grid;
//Cálculo da APE desejada
    const apeDesejada = areaTotal * percentual; //Cálculo do percentual da área do raio
//Comparação: ATE vs APE desejada
    if (ate >= apeDesejada) {
        document.getElementById('resultado-ape').textContent = 'Área predominantemente edificada';
//Se a ATE for menor que a APE desejada
    } else {
        const centroidesNecessarios = Math.ceil(apeDesejada / grid); //Calcula o número de centroides necessários
        const centroidesFaltantes = centroidesNecessarios - centroides;//verifica quantos faltam
        document.getElementById('resultado-ape').textContent = `Área não predominantemente edificada. Faltam ${centroidesFaltantes} centroides para atingir ${percentual * 100}% da área.`;
    }
});

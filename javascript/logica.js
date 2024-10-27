

//aqui eu crio um script para calcular a area de um raio (A = pi * raio²)



//calculo de area do raio (A=pi*tamanho do raio ²)
const raio = 100;//(em m)
const pi = 3.14159; //valor de pi
const A = Number(pi *(raio ** 2)).toFixed(2);//toFixed fixa a casa decimal em no maximo 2 casas decimais

console.log("Área total do raio:",A,"m²");

const grid = 4; //grid tem 4m²
const centroides = 32;//numero de centroides
const ATE = Number(centroides * grid).toFixed(2); //aqui eu tenho a area total (area total edificada ATE)
console.log("Área total edificada:", ATE,"m²");


const APE = A * 0.5; // 50% da área do círculo //assim eu obtenho o valor total de 50% da area do raio
console.log("Área predominantemente edificada:", APE, "m²");


switch(true){
    case APE >= APE:
       console.log("Área predominantemente edificada");
       break;

    case APE < APE:
       console.log("Área não predominantemente edificada");
      
       // Calcula quantos centroides são necessários para alcançar 50% da área do círculo
       const centroidesNecessarios = Math.ceil(APE / grid); // Arredonda para cima
       const centroidesFaltantes = centroidesNecessarios - centroides; // Calcula quantos centroides faltam
       console.log(`Você precisa de mais ${centroidesFaltantes} centroides para alcançar 50% da área do raio.`);
       break;
}

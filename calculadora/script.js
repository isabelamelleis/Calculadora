function calcular() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operacao = document.getElementById('operacao').value;
    switch (operacao) {
        case ("adicao"):
            resultado = numero1 + numero2;
            break;
        case ("subtracao"):
            resultado = numero1 - numero2;
            break;
        case ("multiplicacao"):
            resultado = numero1 * numero2;
            break;
        case ("divisao"):
            if (numero2 === 0) {
                alert("Impossível dividir um número por 0.")
                resultado = "";
                break;
            } else {
                resultado = numero1 / numero2;
                break;
            }
        default:
            alert("Selecione uma opção válida de operação.");
            resultado = ""
    }
    var mostrarResultado = document.getElementById('mostrarResultado');
    mostrarResultado.innerHTML = resultado;
}
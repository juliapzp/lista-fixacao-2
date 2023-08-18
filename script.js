function atv1() {
    let countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "Contagem regressiva iniciada:<br>";
    let count = 10;
    let countdownInterval = setInterval(function () {
        countdownElement.innerHTML = count + "<br>";
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Feliz Ano Novo!";
        }
    }, 1000);
}

function atv2() {
    var numero = document.getElementById("numero").value;
    var tabuadaElement = document.getElementById("tabuada");
    tabuadaElement.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        var linha = document.createElement("tr");
        var colunaNumero = document.createElement("td");
        colunaNumero.innerText = numero;
        var colunaMultiplicador = document.createElement("td");
        colunaMultiplicador.innerText = "x " + i;
        var colunaResultado = document.createElement("td");
        colunaResultado.innerText = resultado;
        linha.appendChild(colunaNumero);
        linha.appendChild(colunaMultiplicador);
        linha.appendChild(colunaResultado);
        tabuadaElement.appendChild(linha);
    }
}

function atv3() {
    var contador = 1;
    var soma = 0;
    var quantidadePares = 0;

    while (quantidadePares < 50) {
        if (contador % 2 === 0) {
            soma += contador;
            quantidadePares++;
        }
        contador++;
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = "A soma dos primeiros 50 números pares é: " + soma;
}

function atv4() {
    var numero = parseInt(prompt("Insira um número para verificar se é primo:"));
    var primo = true;
    if (numero < 2) {
        primo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }
    if (primo) {
        alert(numero + " é um número primo!");
    } else {
        alert(numero + " não é um número primo.");
    }
}

function atv5() {
    var n = parseInt(prompt("Insira um número N para gerar a sequência de Fibonacci:"));
    var fibonacci = [0, 1];
    while (fibonacci.length < n) {
        var nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextNumber);
    }
    var output = "Sequência de Fibonacci até o termo " + n + ": " + fibonacci.join(" – ");
    document.getElementById("resultado").textContent = output;
}
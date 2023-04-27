function carregar() {
    alert("Ola mundo")
}

localStorage.setItem("EFQ-8H67", "Paulo Eduardo Silva Montier")
localStorage.setItem("H12-J612", "Guilherme Rossi")
localStorage.setItem("LIQ-OIU4", "Pedro Henrique Lopes Montier")
localStorage.setItem("PQW-12E3", "Felipe Canarozzo")
localStorage.setItem("IQW-839J", "Graciete Henrique")
localStorage.setItem("MQS-1E63", "José Carlos")

function exibir() {
    var exibir
    digitado = document.getElementById('coletortexto').value
    exibir = localStorage.getItem("digitado")
    alert(exibir)
}

function cadastrar() {
    placa = document.getElementById('placa').value
    proprietarionome = document.getElementById('proprietario').value

    localStorage.setItem(placa, proprietarionome)
}

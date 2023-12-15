var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")

var setae = window.document.getElementById("setae")
var setad = window.document.getElementById("setad")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setae.style ="display:flex"
    setad.style ="display:none"
}

function RolarParaEsquerda() {

    bruna.style ="display:none"
    leonardo.style ="display:flex"
    setad.style ="display:flex"
    setae.style ="display:none"
}
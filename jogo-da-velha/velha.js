const h1 = document.getElementById("h1")
const table = document.getElementById("table")
const item = []
const reiniciar = document.getElementById("btn")
const vencedor = document.getElementById("vencedor")

for(let i = 1; i < 10; i++){
  item[i] = document.getElementById(`item${i}`)
}

const venceu = () => {
  if((item[1].innerText !== "" &&
      item[1].innerText == item[2].innerText && item[2].innerText == item[3].innerText) ||
     (item[4].innerText !== "" &&
      item[4].innerText == item[5].innerText && item[5].innerText == item[6].innerText) ||
     (item[7].innerText !== "" &&
      item[7].innerText == item[8].innerText && item[8].innerText == item[9].innerText) ||
     (item[1].innerText !== "" &&
      item[1].innerText == item[4].innerText && item[4].innerText == item[7].innerText) ||
     (item[2].innerText !== "" &&
      item[2].innerText == item[5].innerText && item[5].innerText == item[8].innerText) ||
     (item[3].innerText !== "" &&
      item[3].innerText == item[6].innerText && item[6].innerText == item[9].innerText) ||
     (item[1].innerText !== "" &&
      item[1].innerText == item[5].innerText && item[5].innerText == item[9].innerText) ||
     (item[3].innerText !== "" &&
      item[3].innerText == item[5].innerText && item[5].innerText == item[7].innerText)
    ){
      return 1
    }
    let cont = 0;
    for(let i = 1; i < 10; i++){
      if(item[i].innerHTML !== "") cont++
    }
    if(cont == 9){
      return -1
    }
    return 0
}

let jogador = true //true -> jogador 1 / false -> jogador 2 

const handleClick = (e) => {
  const quadrado = e.target
  if(quadrado.innerHTML == ""){
    quadrado.innerHTML = jogador ? "<h1>X<h1/>" : "<h1>O<h1/>"
  }
  if(venceu() == 1) {
    vencedor.innerHTML = jogador ? "JOGADOR 1 VENCEU" :  "JOGADOR 2 VENCEU"
    for(let i = 1; i < 10; i++){
      if(item[i].innerHTML == ""){
        item[i].innerHTML = "<span><span/>"
      }
    }
    return
  }
  jogador = !jogador
  if(venceu() == -1){
    vencedor.innerHTML = "EMPATE"
  }
}

const reset = () => {
  for(let i = 1; i < 10; i++) {
    jogador = true
    item[i].innerHTML = ""
    vencedor.innerHTML = "<br>"
    for (let i = 1; i < 10; i++) {
      item[i].addEventListener("click", handleClick,  { once: true })
    }
  }
}

for (let i = 1; i < 10; i++) {
  item[i].addEventListener("click", handleClick,  { once: true })
}

reiniciar.addEventListener("click", reset)
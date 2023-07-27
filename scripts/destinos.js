import { destinos, onScroll, setCurrentPage } from "./data.js";

const main = document.querySelector("main")
const nacionais = main.querySelector("#nacionais")
const internacionais = main.querySelector("#internacionais")

window.addEventListener('scroll', onScroll)
setCurrentPage()

destinos.sort((a, b) => {
  return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
})

destinos.map(({ tipo, nome, img, descricaoMaior }) => {
  if (tipo === "nacional") {
    nacionais.innerHTML += `
   <div class="card" style="width: 18rem;">
           <img src="../assets/imgs/min/${img}_min.jpg" class="card-img-top" alt="Imagem de ${nome}">
           <div class="card-body">
             <h5 class="card-title">${nome}</h5>
             <p class="card-text">${descricaoMaior}
             </p>
           </div>
         </div>
   `
  } else {
    internacionais.innerHTML += `
   <div class="card" style="width: 18rem;">
           <img src="../assets/imgs/min/${img}_min.jpg" class="card-img-top" alt="Imagem de ${nome}">
           <div class="card-body">
             <h5 class="card-title">${nome}</h5>
             <p class="card-text">${descricaoMaior}
             </p>
           </div>
         </div>
   `
  }
})
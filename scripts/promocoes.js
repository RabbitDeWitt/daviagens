import { destinos, onScroll, setCurrentPage } from "./data.js";

const main = document.querySelector("main")
const descontos = main.querySelector("#descontos")
const precos = main.querySelector("#precos")
const populares = main.querySelector("#populares")

window.addEventListener('scroll', onScroll)
setCurrentPage()

destinos.sort((a, b) => {
  return a.desconto > b.desconto ? -1 : a.desconto < b.desconto ? 1 : 0
})

for (let i = 0; i < 4; i++) {
  const { nome, img, desconto, valor } = destinos[i];
  const valorComDesconto = valor - (valor * (desconto / 100))

  descontos.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="./assets/imgs/min/${img}_min.jpg" class="card-img-top" alt="Imagem de ${nome}">
          <div class="card-body">
            <h5 class="card-title">${nome}</h5>
          </div>
          <ul class="list-group list-group-flush position-relative bg-bg-danger  ">
          <li class="list-group-item">
          <p class="my-2 mb-1 text-secondary " style="font-size: 14px;">Preço por pessoa</p>
          <p class="mb-0 text-decoration-line-through text-secondary " style="font-size: 15px;">R$ ${valor.toFixed(2)}</p>
          <p class="mb-0" style="font-size: 25px; color: black !important;">R$ ${valorComDesconto.toFixed(2)}</p>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style="left: 35px; color: white !important;">
        ${desconto}% Off
        <span class="visually-hidden">unread messages</span>
          </li>
          </ul>
          <div class="card-body d-flex align-items-center justify-content-between">
            <a href="#" class="btn btn-primary">Comprar</a>
            <a href="#" class="btn btn-primary">Saiba mais</a>
          </div>
        </div>
`
}

destinos.sort((a, b) => {
  return a.valor < b.valor ? -1 : a.valor > b.valor ? 1 : 0
})


for (let i = 0; i < 4; i++) {
  const { nome, img, desconto, valor } = destinos[i];
  const valorComDesconto = valor - (valor * (desconto / 100))

  precos.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="./assets/imgs/min/${img}_min.jpg" class="card-img-top" alt="Imagem de ${nome}">
          <div class="card-body">
            <h5 class="card-title">${nome}</h5>
          </div>
          <ul class="list-group list-group-flush position-relative bg-bg-danger  ">
          <li class="list-group-item">
          <p class="my-2 mb-1 text-secondary " style="font-size: 14px;">Preço por pessoa</p>
          <p class="mb-0 text-decoration-line-through text-secondary " style="font-size: 15px;">R$ ${valor.toFixed(2)}</p>
          <p class="mb-0" style="font-size: 25px; color: black !important;">R$ ${valorComDesconto.toFixed(2)}</p>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style="left: 35px; color: white !important;">
        ${desconto}% Off
        <span class="visually-hidden">unread messages</span>
          </li>
          </ul>
          <div class="card-body d-flex align-items-center justify-content-between">
            <a href="#" class="btn btn-primary">Comprar</a>
            <a href="#" class="btn btn-primary">Saiba mais</a>
          </div>
        </div>
`
}

destinos.sort((a, b) => {
  return a.popularidade > b.popularidade ? -1 : a.popularidade < b.popularidade ? 1 : 0
})


for (let i = 0; i < 4; i++) {
  const { nome, img, desconto, valor } = destinos[i];
  const valorComDesconto = valor - (valor * (desconto / 100))

  populares.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="./assets/imgs/min/${img}_min.jpg" class="card-img-top" alt="Imagem de ${nome}">
          <div class="card-body">
            <h5 class="card-title">${nome}</h5>
          </div>
          <ul class="list-group list-group-flush position-relative bg-bg-danger  ">
          <li class="list-group-item">
          <p class="my-2 mb-1 text-secondary " style="font-size: 14px;">Preço por pessoa</p>
          <p class="mb-0 text-decoration-line-through text-secondary " style="font-size: 15px;">R$ ${valor.toFixed(2)}</p>
          <p class="mb-0" style="font-size: 25px; color: black !important;">R$ ${valorComDesconto.toFixed(2)}</p>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style="left: 35px; color: white !important;">
        ${desconto}% Off
        <span class="visually-hidden">unread messages</span>
          </li>
          </ul>
          <div class="card-body d-flex align-items-center justify-content-between">
            <a href="#" class="btn btn-primary">Comprar</a>
            <a href="#" class="btn btn-primary">Saiba mais</a>
          </div>
        </div>
`
}
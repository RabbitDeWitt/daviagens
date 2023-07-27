import { destinos, onScroll, setCurrentPage } from "./data.js"


const carousel = document.querySelector('.carousel')
const carouselIndicators = carousel.querySelector('.carousel-indicators')
const carouselInner = carousel.querySelector('.carousel-inner')

const destiny = document.querySelector('#destinos')
const destinyCardsSection = destiny.querySelector('.card-section')

const promotion = document.querySelector('#promocoes')
const promotionCardsSection = promotion.querySelector('.card-section')

window.addEventListener('scroll', onScroll)

setCurrentPage()





let randomNums = []
while (randomNums.length < 7) {
  let num = parseInt(Math.random() * destinos.length)
  if (randomNums.indexOf(num) === -1) randomNums.push(num)
}


/* CAROUSEL IMGS */
for (let index = 0; index < randomNums.length; index++) {

  const num = randomNums[index]
  const { nome, img, descricao, descricaoMaior, desconto, valor } = destinos[num];

  const valorComDesconto = valor - (valor * (desconto / 100))

  if (index < 3) {
    carouselIndicators.innerHTML += `
  <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="${index}" class="${index == 0 ? 'active' : ''}"
          aria-current="true" aria-label="Slide ${index + 1}"></button>
  `
    carouselInner.innerHTML += `
  <div class="carousel-item ${index == 0 ? 'active' : ''}" data-bs-interval="5000">
          <img src="./assets/imgs/${img}.jpg" class="d-block w-100" alt="Imagem de ${nome}">
           <div class="carousel-caption px-2 d-none d-md-block">
            <h4>${nome}</h4>
            <p>${descricao}</p>
           </div>
  </div> 
  `
  } else if (index < 5) {
    destinyCardsSection.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="./assets/imgs/min/${img}_min.jpg" class="card-img-top" alt="Imagem de ${nome}">
          <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <p class="card-text">${descricaoMaior}
            </p>
          </div>
        </div>
`
  } else {
    promotionCardsSection.innerHTML += `
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
}

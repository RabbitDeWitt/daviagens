export const navbar = document.querySelector('#navbar');

export const destinos = [
  {
    tipo: 'nacional',
    nome: 'Rio de Janeiro',
    img: 'urca',
    descricao: '"Rio de Janeiro, beleza que inspira."',
    descricaoMaior: '"O Rio de Janeiro, cidade maravilhosa do Brasil, encanta com suas praias deslumbrantes, montanhas majestosas, e um carnaval contagiante, proporcionando uma experiência única e apaixonante aos visitantes."',
    valor: 705,
    desconto: 7,
    popularidade: 4,
  },
  {
    tipo: 'internacional',
    nome: 'Seoul',
    img: 'seoul',
    descricao: '"Seoul, a cidade das mil faces e infinitas possibilidades."',
    descricaoMaior: '"Seoul, uma metrópole eletrizante que combina tradição e modernidade, oferecendo uma rica tapeçaria cultural, tecnológica e gastronômica, que hipnotiza e encanta seus visitantes."',
    valor: 10675,
    desconto: 20,
    popularidade: 4,
  },
  {
    tipo: 'nacional',
    nome: 'Salvador',
    img: 'salvador',
    descricao: '"Salvador, onde história e encanto se encontram."',
    descricaoMaior: '"Salvador, a cidade do axé e da cultura afro-brasileira, encanta com suas praias deslumbrantes, arquitetura colonial colorida e festas animadas, emanando uma energia contagiante em cada esquina."',
    valor: 866,
    desconto: 7,
    popularidade: 4,
  },
  {
    tipo: 'internacional',
    nome: 'São Francisco',
    img: 'sanfrancisco',
    descricao: '"San Francisco, cidade da Califórnia encantadora."',
    descricaoMaior: '"São Francisco, cidade vibrante na costa oeste dos EUA, é famosa pela icônica Golden Gate Bridge, cenário tecnológico e cultura diversificada, proporcionando uma experiência cativante e inesquecível aos seus visitantes."',
    valor: 4180,
    desconto: 15,
    popularidade: 5,
  },
  {
    tipo: 'internacional',
    nome: 'Sidney',
    img: 'sidney',
    descricao: '"Sydney, a deslumbrante cidade australiana."',
    descricaoMaior: '"Sydney, a espetacular metrópole australiana, que combina praias de tirar o fôlego, uma arquitetura moderna e icônica, além de uma vida cultural vibrante, tornando-se uma das cidades mais fascinantes e desejadas do mundo."',
    valor: 9275,
    desconto: 20,
    popularidade: 3,
  },
  {
    tipo: 'nacional',
    nome: 'Mariana',
    img: 'mariana',
    descricao: '"Mariana, uma encantadora cidade mineira."',
    descricaoMaior: '"Mariana, cidade histórica de Minas Gerais, fascina com suas igrejas barrocas preservadas, casarões coloniais e paisagens pitorescas, transportando os visitantes para um passado encantador do Brasil colonial."',
    valor: 874,
    desconto: 5,
    popularidade: 3,
  },
  {
    tipo: 'nacional',
    nome: 'Curitiba',
    img: 'curitiba',
    descricao: '"Curitiba, verdejante metrópole com rica cultura brasileira."',
    descricaoMaior: '"Curitiba, a capital ecológica do Brasil, encanta com seus parques bem-cuidados, sistema de transporte eficiente e uma rica cena cultural, oferecendo uma qualidade de vida invejável aos seus moradores."',
    valor: 483,
    desconto: 5,
    popularidade: 3,
  },
  {
    tipo: 'nacional',
    nome: 'Recife',
    img: 'recife',
    descricao: '"Recife, cidade encantadora do Nordeste brasileiro."',
    descricaoMaior: '"Recife, a joia do Nordeste brasileiro, encanta com suas praias de águas mornas e coqueirais, sua rica história que mescla tradição e modernidade, e a alegria contagiante de seu povo, sempre acolhedor e vibrante."',
    valor: 1596,
    desconto: 10,
    popularidade: 4,
  },
  {
    tipo: 'internacional',
    nome: 'Paris',
    img: 'paris',
    descricao: '"Paris, a cidade luz do romantismo e da cultura."',
    descricaoMaior: '"Paris, a romântica Cidade Luz, cativa com seus ícones icônicos como a Torre Eiffel e o Louvre, além de uma cultura sofisticada e gastronomia refinada, tornando-se um destino inesquecível para os apaixonados por arte, história e charme."',
    valor: 4716,
    desconto: 13,
    popularidade: 5,
  },
  {
    tipo: 'internacional',
    nome: 'Londres',
    img: 'london',
    descricao: '"Londres, a metrópole multicultural e cheia de história."',
    descricaoMaior: '"Londres, a capital britânica, brilha com uma rica tapeçaria de história e modernidade, destacando-se com seus marcos emblemáticos, cultura diversificada e dinâmica cena artística, tornando-se uma cidade perfeita para explorar."',
    valor: 5347,
    desconto: 10,
    popularidade: 5,
  },
  {
    tipo: 'internacional',
    nome: 'Tóquio',
    img: 'tokyo',
    descricao: '"Tóquio, metrópole futurista e vibrante do Japão."',
    descricaoMaior: '"Tóquio, combina modernidade e tradição em uma harmoniosa fusão. Seus arranha-céus reluzentes, templos ancestrais e cultura pop enérgica encantam os visitantes do mundo todo, oferecendo uma experiência única e inesquecível."',
    valor: 7547,
    desconto: 15,
    popularidade: 4,
  },
  {
    tipo: 'nacional',
    nome: 'Maranhão',
    img: 'maranhao',
    descricao: '"São Luís, cidade histórica e culturalmente rica."',
    descricaoMaior: '"São Luís, capital do Maranhão, é um tesouro histórico com sua arquitetura colonial preservada e rica herança cultural. Suas praias exuberantes e gastronomia típica completam a experiência encantadora."',
    valor: 1856,
    desconto: 10,
    popularidade: 3,
  },


]

export function setCurrentPage() {
  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add('active')
    }
  })
}


export function onScroll() {
  if (scrollY > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
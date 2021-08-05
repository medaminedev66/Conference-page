const speakers = [
  {
    name: 'Yochai Benkler',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './img/profiles/alex-suprun-ZHvM3XIOHoE-unsplash.jpg',
    alt: 'Photo by Christopher Campbell on Unsplash',
  },
  {
    name: 'Ali Abbani',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './img/profiles/nicolas-horn-MTZTGvDsHFY-unsplash.jpg',
    alt: 'Photo by Nicoles Horn on Unsplash',
  },
  {
    name: 'Henry hi',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './img/profiles/aatik-tasneem-7omHUGhhmZ0-unsplash.jpg',
    alt: 'Photo by Aatik Tsneem on Unsplash',
  },
  {
    name: 'Julina Hey',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './img/profiles/christopher-campbell-rDEOVtE7vOs-unsplash.jpg',
    alt: 'Photo by Christopher Campbell on Unsplash',
  },
  {
    name: 'Julina Hey',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './img/profiles/jack-finnigan-rriAI0nhcbc-unsplash.jpg',
    alt: 'Photo by Jack Finnigan on Unsplash',
  },
  {
    name: 'Julina Hey',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './img/profiles/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg',
    alt: 'Photo by Tamarcus Brown on Unsplash',
  },
];
const openNav = () => {
  document.querySelector('header').classList.add('visible');
  document.querySelector('.closeBtn').classList.toggle('visible');
};
const closeMenu = () => {
  document.querySelector('header').classList.remove('visible');
  document.querySelector('.closeBtn').classList.toggle('visible');
};
document.querySelector('.fa-bars').addEventListener('click', openNav);
document.querySelector('.closeBtn>i').addEventListener('click', closeMenu);
document.querySelector('.nav-ul >li > a').addEventListener('click', closeMenu);
const generateSpeaker = (speaker) => {
  const container = document.createElement('div');
  const image = document.createElement('div');
  const chess = document.createElement('img');
  const photo = document.createElement('img');
  const fullname = document.createElement('h3');
  const proffession = document.createElement('h4');
  const description = document.createElement('p');
  const information = document.createElement('div');
  container.appendChild(image);
  container.appendChild(information);
  image.appendChild(chess);
  image.appendChild(photo);
  information.appendChild(fullname);
  information.appendChild(proffession);
  information.appendChild(description);
  container.className = 'container';
  image.className = 'big-image';
  chess.className = 'chess-image';
  photo.className = 'profile-image';
  fullname.className = 'full-name';
  proffession.className = 'profession';
  description.className = 'description';
  information.className = 'information';
  document.querySelector('.speakers').appendChild(container);
  fullname.innerText = speaker.name;
  chess.src = './img/profiles/Chess_board.svg.png';
  photo.src = speaker.photo;
  photo.alt = speaker.alt;
  proffession.innerText = speaker.proffession;
  description.innerText = speaker.description;
};
speakers.map((speaker, index) => {
  if (window.innerWidth <= 760) {
    if (index < 2) {
      generateSpeaker(speaker);
    }
  } else {
    generateSpeaker(speaker);
  }
  return speaker;
});
const openMore = () => {
  speakers.map((speaker, index) => {
    if (index >= 2) generateSpeaker(speaker);
    return speaker;
  });
  document.querySelector('.more').removeEventListener('click', openMore);
};
let count = 0;
document.querySelector('.more').addEventListener('click', openMore);
document.querySelector('.more').addEventListener('click', () => {
  count += 1;
  if (count === 2) {
    window.location = './pages/about.html';
  }
});

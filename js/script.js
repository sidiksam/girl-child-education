const speakers = {
  speaker1: {
    id: 1,
    name: 'Fawaz Milton',
    title: 'CEO and Director of Girl Child Education Organization',
    about: 'Fawaz discovered The Girl pinin 4 beteh organization in 2015. He studied Applied Accounting in the Institute of Public Administration and Management(IPAM) University.',
    checkersImage: '../images/checkers.png',
    featuredImage: '../images/fawaz.jpg',
  },
  speaker2: {
    id: 2,
    name: 'Fatima Bio',
    title: 'Founder of the women free education',
    about: 'She has a Bachelor of Arts degree in journalism at the University of the Arts, London College of Communication,',
    checkersImage: '../images/checkers.png',
    featuredImage: '../images/fatima.jpg',
  },
  speaker3: {
    id: 3,
    name: 'Santos Kamara',
    title: 'Founder and CEO of My Mother Choice Foundation',
    about: 'Student at Institute of Public Administration and Management(IPAM) University studying Applied Accounting ',
    checkersImage: '../images/checkers.png',
    featuredImage: '../images/santos.jpg',
  },
  speaker4: {
    id: 4,
    name: 'Sunkray Sunkarie',
    title: 'Founder and the CEO of the Sunkarie Foundation',
    about: 'She is a student of Frobay College (FBC)',
    checkersImage: '../images/checkers.png',
    featuredImage: '../images/sunkari-foundation_n.jpg',
  },
  speaker5: {
    id: 5,
    name: 'Idrissa Bangura ',
    title: 'Co-founder. of the Kids happiness foundation',
    about: 'Studied social works in University of Milton margai. Currently the CEO of kids happiness foundation in Sierra Leone .',
    checkersImage: '../images/checkers.png',
    featuredImage: '../images/alabama.jpg',
  },
  speaker6: {
    id: 6,
    name: 'Saibatu Mansaray',
    title: 'Founder and CEO. The Saibatu Mansaray Journey',
    about: 'A retired milliatery woman in the united state of america (USA).',
    checkersImage: '../images/checkers.png',
    featuredImage: '../images/saibatu-foundation.jpg',
  },

};

const SpeakerSection = document.querySelector('.speakersWrap');

Object.keys(speakers).forEach((speaker) => {
  if (Object.hasOwnProperty.call(speakers, speaker)) {
    const person = speakers[speaker];
    SpeakerSection.innerHTML += `
        <li class="speakers mobile-speakers">
        <div class="speaker-img">
          <img class="checkers" src='${person.checkersImage}' alt=${person.about}/>
          <img class="speakers" src='${person.featuredImage}' alt=${person.about}/>
      </div>
        <div class="speaker-abt">
          <h5>${person.name}</h5>
      <h6>${person.title}</h6>
          <div class="line2"></div>
          <p>${person.about}</p>
        </div>
      </li>
        `;
  }
});

const HamburgerMenu = document.querySelector('.hamburger');
const MobileNav = document.querySelector('.mobileLink');
const MobileNavLists = document.querySelectorAll('.nav-item-mobile');

HamburgerMenu.addEventListener('click', () => {
  HamburgerMenu.classList.toggle('is-active');
  MobileNav.classList.toggle('is-active');
});

MobileNavLists.forEach((link) => {
  link.addEventListener('click', () => {
    HamburgerMenu.classList.toggle('is-active');
    MobileNav.classList.toggle('is-active');
  });
});
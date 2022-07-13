import "./style.css";

import { groupById, getPhotosApi } from "./helpers/utils";

let getAlbunsApi = getPhotosApi();

const generateAlbumMenu = () => {
  getAlbunsApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    const ulListAlbunsID = document.querySelector('.albuns');
    const firstTwentyAlbuns = Object.keys(groupAlbunsId).slice(0, 20);

    for (const key in firstTwentyAlbuns) {
      ulListAlbunsID.innerHTML += `<li class="albums-itens"><a href="#">- Album ${firstTwentyAlbuns[key]}</a></li>`;
    }
  });
}

const loadPhotosList = () => {
  getAlbunsApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    let clicledLi = document.querySelectorAll(`.albums-itens`);
    let imageUlPhoto = document.querySelector('.carousel');
    clicledLi.forEach((item, index) => {
      item.addEventListener('click', () => {
        let indexIdAlbuns = index + 1;
        const objectAlbumPhotos = groupAlbunsId[indexIdAlbuns];

        imageUlPhoto.innerHTML = '';
        for (const key of objectAlbumPhotos) {
          imageUlPhoto.innerHTML += `<li class="carousel-item"> <img src="${key.thumbnailUrl}" alt="" /> </li>`;
        }
      })
    });

  });
}

const loadFirstAlbum = () => {
  getAlbunsApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    let albumPhotoIdOne = Object.keys(groupAlbunsId).slice(0, 1);
    let imageUlPhoto = document.querySelector('.carousel');

    if (albumPhotoIdOne == '1') {
      const objectAlbumPhotos = groupAlbunsId[albumPhotoIdOne];
      for (const key of objectAlbumPhotos) {
        imageUlPhoto.innerHTML += `<li class="carousel-item"> <img src="${key.thumbnailUrl}" alt="" /> </li>`;
      }
    }
  })
}

const loadAlbumInfo = () => {
  getAlbunsApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    let albumPhotoIdOne = Object.keys(groupAlbunsId).slice(0, 1);
    let imageInfo = document.querySelectorAll('.carousel-item');
    imageInfo.forEach(image => {
      image.addEventListener('click', () => {
        console.log(imageInfo);
      })
    })


  })
}

/** Moviment of images
 *
 * // Select slides
  const slides = document.querySelectorAll('.carousel-item');
  console.log(slides);

  // current slide counter
  let curSlide = 0;

  // maximum number of slides
  let maxSlide = slides.length - 1;

  // select next slide button
  const nextSlide = document.querySelector(".next");
  // select prev slide button
  const prevSlide = document.querySelector(".prev");

  // add event listener and next slide functionality
  nextSlide.addEventListener("click", function () {
    curSlide === maxSlide
      ? curSlide = 0
      : curSlide++

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}px)`;
    });
  });

  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    curSlide === 0
      ? curSlide = maxSlide
      : curSlide--

    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}px)`;
    });
  });
 */




window.onload = () => {
  loadFirstAlbum();
  generateAlbumMenu();
  loadPhotosList();
  loadAlbumInfo();
}

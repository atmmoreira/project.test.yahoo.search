import "./style.css";

import { groupById, getPhotosApi } from "./helpers/utils";

let getPhotoApi = getPhotosApi();

const loadFirstAlbum = async () => {
  return getPhotoApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    let albumPhotoIdOne = Object.keys(groupAlbunsId).slice(0, 1);
    let imageUlPhoto = document.querySelector('.thumbnailCarousel-items');
    const objectAlbumPhotos = groupAlbunsId[albumPhotoIdOne];

    objectAlbumPhotos.filter(i => {
      if (i.albumId === 1 && i.id === 1) {
        let imageViewer = document.querySelector('.imageViewer-info');
        imageViewer.innerHTML = `
          <img src='${i.url}' alt="" />
          <p> ${i.title} </p>
        `
        return
      }
    })

    if (albumPhotoIdOne == '1') {
      for (const key of objectAlbumPhotos) {
        let createLiThumbnailItem = document.createElement('li');
        createLiThumbnailItem.classList.add('thumbnailCarousel-item');
        let imgThumbnailItem = document.createElement('img');
        imgThumbnailItem.setAttribute('src', `${key.thumbnailUrl}`);
        createLiThumbnailItem.appendChild(imgThumbnailItem);
        imageUlPhoto.appendChild(createLiThumbnailItem);
      }
    }
  })
}

const generateAlbumMenu = async () => {
  return getPhotoApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    const ulAlbumList = document.querySelector('.albumList-list');
    const firstTwentyAlbuns = Object.keys(groupAlbunsId).slice(0, 20);

    for (const key in firstTwentyAlbuns) {
      ulAlbumList.innerHTML += `<li class="albumList-item"><a href="#">- Album ${firstTwentyAlbuns[key]}</a></li>`;
    }
  });
}

const generatePhotosList = async () => {
  return getPhotoApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    let albumListItem = document.querySelectorAll('.albumList-item');
    let ulThumbnailCarousel = document.querySelector('.thumbnailCarousel-items');

    albumListItem.forEach((item, index) => {
      item.addEventListener('click', () => {
        let indexIdAlbuns = index + 1;
        const objectAlbumPhotos = groupAlbunsId[indexIdAlbuns];

        ulThumbnailCarousel.innerHTML = '';
        for (const key of objectAlbumPhotos) {
          ulThumbnailCarousel.innerHTML += `<li class="thumbnailCarousel-item"> <img src="${key.thumbnailUrl}" alt="" /> </li>`;
        }
      })
    });
  });
}


const loadAlbumInfo = () => {
  let listPhotoItens = document.querySelectorAll('.thumbnailCarousel-item');

  getPhotoApi.then(data => {
    let groupAlbunsId = groupById(data, 'albumId');
    for (const key in groupAlbunsId) {
      // console.log(key);
    }
  })

  listPhotoItens.forEach(item => {
    item.addEventListener('click', () => {
      // console.log('Funcionando');
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

window.onload = async () => {
  loadFirstAlbum();
  await generateAlbumMenu();
  await generatePhotosList();
  loadAlbumInfo();

}

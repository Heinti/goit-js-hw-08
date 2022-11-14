// Add imports above this line

import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

import { galleryItems } from "./gallery-items.js";


console.log(galleryItems);

const ref = {
  gallery: document.querySelector(".gallery"),
};

const imgsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"

         />
        </a>`
        )
  .join("");
ref.gallery.insertAdjacentHTML("beforeend", imgsEl);

let lightbox = new SimpleLightbox('.gallery a', 
{captionsData: 'alt', captionDelay:'250'});


console.log(galleryItems);

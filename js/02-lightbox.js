import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", createGallery);

gallery.addEventListener("click", selectItem);

function selectItem(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });

import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function renderGallery() {
  const gallery = document.querySelector(".gallery");
  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });
}

function openModal(event) {
  event.preventDefault();

  const largeImageUrl = event.target.dataset.source;

  const modalImage = document.querySelector(".modal__image");
  modalImage.src = largeImageUrl;

  const modal = document.querySelector(".modal");
  modal.classList.add("open");

  document.addEventListener("keydown", handleKeyDown);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("open");

  document.removeEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

renderGallery();

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openModal);

const modalCloseButton = document.querySelector(".modal__close");
modalCloseButton.addEventListener("click", closeModal);

console.log(galleryItems);

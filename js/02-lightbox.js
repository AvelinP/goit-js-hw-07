import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  // const galleryItem = createGalleryItem(item);
  // gallery.appendChild(galleryItem);

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
  gallery.appendChild(galleryItem);
});

function createLightbox() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  return lightbox;
}
const lightbox = createLightbox();
gallery.addEventListener("click", (Event) => {
  Event.preventDefault();
  lightbox.open();
});

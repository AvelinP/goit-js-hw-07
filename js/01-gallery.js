import { galleryItems } from "./gallery-items.js";
// Change code below this line

// function createGalleryItem(item) {

// function renderGallery() {
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

// return galleryItem;

// function renderGallery() {
//   const gallery = document.querySelector(".gallery");
//   galleryItems.forEach((item) => {
//     const galleryItem = createGalleryItem(item);
//     gallery.appendChild(galleryItem);
//   });
// }

// function openModal(event) {
//   event.preventDefault();

//   const largeImageUrl = event.target.dataset.source;

//   const modalImage = document.querySelector(".modal__image");
//   modalImage.src = largeImageUrl;

//   const modal = document.querySelector(".modal");
//   modal.classList.add("open");

//   document.addEventListener("keydown", handleKeyDown);
// }

// function closeModal() {
//   const modal = document.querySelector(".modal");
//   modal.classList.remove("open");

//   document.removeEventListener("keydown", handleKeyDown);
// }

// function handleKeyDown(event) {
//   if (event.code === "Escape") {
//     closeModal();
//   }
// }

// renderGallery();

// const gallery = document.querySelector(".gallery");
// gallery.addEventListener("click", openModal);

// const modalCloseButton = document.querySelector(".modal__close");
// modalCloseButton.addEventListener("click", closeModal);

// console.log(galleryItems);

function createLightbox(content, options = {}) {
  const defaultOptions = {
    onShow: null,
    onClose: null,
  };
  const mergedOptions = { ...defaultOptions, ...options };
  const lightbox = basicLightbox.create(content, {
    ...mergedOptions,
  });
  document.addEventListener("keydown", (Event) => {
    if (Event.key === "Escape") {
      lightbox.close();
    }
  });
  return lightbox;
}
gallery.addEventListener(`click`, (Event) => {
  Event.preventDefault();
  if (Event.target.classList.contains("gallery__image")) {
    const source = Event.target.dataset.source;
    const instance = createLightbox(
      `<img src="${source}" alt="${Event.target.alt}" class="lightbox-image">`,
      {
        onShow: (instance) => {
          const lightboxImage = instance
            .element()
            .querySelector(".lightbox-image");
          lightboxImage.style.maxHeight = "calc(100vh - 20px)";
          lightboxImage.style.maxWidth = "calc(100vw - 20px)";
        },
      }
    );
    instance.show();
  }
});

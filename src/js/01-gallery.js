// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);

for (const item of galleryItems) {
  const listItem = document.createElement(`li`);

  const galleryItem = document.createElement(`a`);
  galleryItem.classList.add(`gallery__item`);
  galleryItem.href = `${item.original}`;
  galleryItem.target = `_self`;

  const galleryImage = document.createElement(`img`);
  galleryImage.classList.add(`gallery__image`);
  galleryImage.src = `${item.preview}`;
  galleryImage.dataset.source = `${item.original}`;
  galleryImage.alt = `${item.description}`;

  gallery.append(listItem);
  listItem.append(galleryItem);
  galleryItem.append(galleryImage);
}
let lightbox = new SimpleLightbox(`.gallery__item`, {
  captions: true,
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: 250,
});

gallery.addEventListener(`click`, e => {
  e.preventDefault();
});

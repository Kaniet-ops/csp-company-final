import '../scss/style.scss';
import './CustomSlider';
import Modal from "./Modal";
import ReadMore from "./ReadMore";
import CustomSlider from "./CustomSlider";

export const ESC_KEYCODE = 27;

const sidebar = new Modal(
  '.sidebar',
  '.overlay--sidebar',
  '.sidebar-active-button',
  '.sidebar__close',
  'sidebar--active',
  false
);
const callback = new Modal(
  '.modal--callback',
  '.overlay--modal',
  '.callback-active-button',
  '.callback-close-button',
  'modal--active',
  false
);
const feedback = new Modal(
  '.modal--feedback',
  '.overlay--modal',
  '.feedback-active-button',
  '.feedback-close-button',
  'modal--active',
  false
);

const aboutReadMore = new ReadMore(
  '.about__more-button',
  'more-button--open',
  '.about__text',
  'about__text--open'
);

const brandReadMore = new ReadMore(
  '.more-button--brand',
  'more-button--open',
  '.cards--brand',
  'cards--active'
);

const deviceReadMore = new ReadMore(
  '.more-button--device',
  'more-button--open',
  '.cards--device',
  'cards--active'
);

const tableSlider = new CustomSlider('.price-table', {
  wrapperClass: 'table__container',
  slideClass: 'table__row',
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.table__pagination',
    clickable: true,
  }
});

const brandSlider = new CustomSlider('.cards--brand', {
  wrapperClass: 'cards__container',
  slideClass: 'card',
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.cards__pagination',
    clickable: true,
  },
});

const deviceSlider = new CustomSlider('.cards--device', {
  wrapperClass: 'cards__container',
  slideClass: 'card',
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.cards__pagination',
    clickable: true,
  },
});

tableSlider.use();
brandSlider.use();
deviceSlider.use();


aboutReadMore.use();
brandReadMore.use();
deviceReadMore.use();

sidebar.use();
callback.use();
feedback.use();

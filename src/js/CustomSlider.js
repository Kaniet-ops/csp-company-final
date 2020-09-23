import Swiper, {Pagination} from 'swiper';

Swiper.use([Pagination]);

/**
 * Функция-конструктор для создания слайдера
 *
 * @param el - класс слайдера
 * @param options - параметры swiper
 * @constructor
 */
function CustomSlider(el, options) {
  this.el = document.querySelector(el);
  this.isInit = false;
  this.options = options;
  this.swiper = null;
  /**
   * Обработчик события resize объекта window.
   * В зависимости от ширины и состояния слайдера
   * либо инициализирует swiper,
   * либо удаляет swiper.
   */
  this.windowResizeHandler = () => {
    if (window.innerWidth <= 767 && !this.isInit) {
      this.isInit = true;
      this.swiper = new Swiper(this.el, this.options);
    }
    if (window.innerWidth > 767 && this.isInit) {
      this.isInit = false;
      this.swiper.destroy();
    }
  }
  /**
   * Функция добавляет обработчик события resize объекту window
   * и вызывает этот обработчик.
   */
  this.use = () => {
    this.windowResizeHandler();
    window.addEventListener('resize', this.windowResizeHandler);
  }
}

export default CustomSlider;

import {ESC_KEYCODE} from "./index";

/**
 * Функция-конструктор модальных окон
 *
 * @param {string} element - Класс модального окна;
 * @param {string} overlay - Класс подложки;
 * @param {string} buttons - Класс открывающих кнопок;
 * @param {string} closeButton - Класс закрывающей кнопки;
 * @param {string} openClass - Класс, применяемый для показа element;
 * @param {boolean} isOpen - Текущее состояние element;
 * @constructor
 */
function Modal(element, overlay, buttons, closeButton, openClass, isOpen) {
  this.element = document.querySelector(element);
  this.overlay = document.querySelector(overlay);
  this.buttons = document.querySelectorAll(buttons);
  this.closeButton = document.querySelector(closeButton);
  this.openClass = openClass;
  this.isOpen = isOpen;
  /**
   * Обработчик события клика
   */
  this.clickHandler = () => {
    this.toggleModal()
  };
  /**
   * Обработчик события нажатия клавиши Esc
   */
  this.escapeKeydownHandler = (event) => {
    if (event.keyCode === ESC_KEYCODE) {
      this.toggleModal();
    }
  }
  /**
   * Функция открытия модального окна.
   */
  this.openModal = () => {
    this.isOpen = true;
    this.element.classList.add(this.openClass);
    this.overlay.classList.add('overlay--open');
    document.querySelector('.page').classList.add('page--open-modal');
    this.element.addEventListener('keydown', this.escapeKeydownHandler);
    this.overlay.addEventListener('click', this.clickHandler);
    this.closeButton.addEventListener('click', this.clickHandler);
    this.buttons.forEach(button => {
      button.removeEventListener('click', this.clickHandler);
    });
    this.modalFocus();
  }
  /**
   * Функция закрытия модального окна.
   */
  this.closeModal = () => {
    this.isOpen = false;
    this.element.classList.remove(this.openClass);
    this.overlay.classList.remove('overlay--open');
    document.querySelector('.page').classList.remove('page--open-modal');
    this.element.removeEventListener('keydown', this.escapeKeydownHandler);
    this.overlay.removeEventListener('click', this.clickHandler);
    this.closeButton.removeEventListener('click', this.clickHandler);
    this.buttons.forEach(button => {
      button.addEventListener('click', this.clickHandler);
    });
    this.modalFocus();
  }
  /**
   * Функция вызывает closeModal или openModal в зависимости от состояния модального окна.
   */
  this.toggleModal = () => {
    if (this.isOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }
  /**
   * Функция управляет состоянием фокуса в модальном окне
   */
  this.modalFocus = () => {
    const input = this.element.querySelector('input');
    if (this.isOpen) {
      if (input && !this.element.classList.contains('sidebar')) {
        input.focus();
      } else {
        document.querySelector('.sidebar').focus();
      }
    } else {
      document.querySelector('.sidebar').focus();
    }
  }
  /**
   * Функция добавляет обработчики события на кнопки.
   */
  this.use = () => {
    this.buttons.forEach(button => {
      button.addEventListener('click', this.clickHandler);
    });
  }
}

export default Modal;

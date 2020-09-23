import {ESC_KEYCODE} from "./index";

/**
 * Функция-конструктор для добавления кнопок more-button
 *
 * @param {string} button - Класс кнопки показать больше
 * @param {string} buttonOpenClass - класс окрытой кнопки
 * @param {string} target - Открывающийся элемент
 * @param {string} targetOpenClass - Класс открытого элемента
 * @param {boolean} isOpen - Состояние
 * @param {string} openText - Текст открытого стостояния
 * @constructor
 */
function ReadMore(button, buttonOpenClass, target, targetOpenClass, isOpen = false, openText = 'Закрыть') {
  this.button = document.querySelector(button);
  this.buttonOpenClass = buttonOpenClass;
  this.target = document.querySelector(target);
  this.targetOpenClass = targetOpenClass;
  this.isOpen = isOpen;
  this.textContainer = null;
  this.openText = openText;
  this.closeText = null;
  /**
   * Обработчик события клика по кнопке.
   * Вызывает функцию this.toggle().
   */
  this.clickHandler = () => {
    this.toggle()
  };
  /**
   * Обработчик события нажатия клавиши esc.
   * Вызывает функцию this.toggle();
   * @param event
   */
  this.escapeKeydownHandler = (event) => {
    if (event.keyCode === ESC_KEYCODE) {
      this.toggle();
    }
  }
  /**
   * Фукция проверяет состояние this.isOpen.
   * Если true вызывает this.close(), в противном случае вызывает this.open() .
   */
  this.toggle = () => {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Функция меняет состояние this.target на открытое.
   */
  this.open = () => {
    this.textContainer = this.button.querySelector('span');
    this.closeText = this.textContainer.innerText;
    this.target.classList.add(this.targetOpenClass);
    this.button.classList.add(this.buttonOpenClass);
    this.textContainer.innerText = this.openText;
    this.isOpen = true;
    window.addEventListener('keydown', this.escapeKeydownHandler);
  }
  /**
   * Функция меняет состояние this.target на закрытое.
   */
  this.close = () => {
    this.target.classList.remove(this.targetOpenClass);
    this.button.classList.remove(this.buttonOpenClass);
    this.textContainer.innerText = this.closeText;
    this.isOpen = false;
    window.removeEventListener('keydown', this.escapeKeydownHandler);
  }
  /**
   * Функция добавляет обработчики события клика на кнопки.
   */
  this.use = () => {
    this.button.addEventListener('click', this.clickHandler);
  }
}

export default ReadMore;

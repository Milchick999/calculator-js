export const displayElement = document.querySelector('.display');
export const bgCalculator = document.querySelector('.calculator');

function initTheme() {
  const themeChanger = document.querySelector('.themeChanger');
  const slider = document.querySelector('.slider');

  const allButtons = document.querySelectorAll('.buttons button');
  const operationButtons = document.querySelectorAll('.buttons button:nth-child(4n)');

  const clearInstrument = document.querySelector('.clear');
  const signInstrument = document.querySelector('.sign');
  const percentInstrument = document.querySelector('.percent');

  if (!themeChanger) {
    return;
  }

  themeChanger.addEventListener('click', () => {
    document.body.classList.toggle('bodyNight');

    slider.classList.toggle('sliderNight');
    slider.classList.toggle('moonPicture');
    themeChanger.classList.toggle('themeChangerNight');

    displayElement.classList.toggle('displayNight');
    bgCalculator.classList.toggle('calcNight');

    allButtons.forEach((btn) => {
      btn.classList.toggle('allBtnNight');
    });

    clearInstrument.classList.toggle('instrumentBtnNight');
    signInstrument.classList.toggle('instrumentBtnNight');
    percentInstrument.classList.toggle('instrumentBtnNight');

    operationButtons.forEach((btn) => {
      btn.classList.toggle('operationBtnNight');
    });
  });
}
export default initTheme;

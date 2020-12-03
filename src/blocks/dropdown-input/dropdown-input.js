import handlers from './dnd_name/dnd_name';

const dropDownInputs = document.querySelectorAll('.dropdown-input');

dropDownInputs.forEach((dndBlock) => {
  const inputField = dndBlock.querySelector('.dropdown-input__field');
  const inputContent = dndBlock.querySelector('.dropdown-input__field-text');
  const itemList = dndBlock.querySelector('.dropdown-input__item-list');
  const options = itemList.querySelectorAll('.dropdown-input__item');
  const blockName = dndBlock.dataset.dndInputName;
  const buttons = dndBlock.querySelector('.dropdown-input__button-block');
  const state = {};

  inputField.addEventListener('click', (e) => {
    inputField.classList.toggle('dropdown-input__field_expand');
    itemList.classList.toggle('dropdown-input__item-list_expand');
  });

  options.forEach((option) => {
    const minus = option.querySelector('.dropdown-input__item-minus');
    const optionInput = option.querySelector('.dropdown-input__item-count');
    if (optionInput.value === '0') minus.disabled = true;

    option.addEventListener('click', (e) => {
      const optionValue = Number(optionInput.value);
      if (e.target.closest('.dropdown-input__item-minus') && optionValue > 0) {
        optionInput.value = optionValue - 1;
        if (optionInput.value === '0') minus.disabled = true;
        state[optionInput.name] = optionInput.value;
        handlers[blockName].count(inputContent, state);
      }
      else if (e.target.closest('.dropdown-input__item-plus')) {
        optionInput.value = optionValue + 1;
        minus.disabled = false;
        state[optionInput.name] = optionInput.value;
        handlers[blockName].count(inputContent, state);
      } else return;
    })

    option.querySelectorAll('.dropdown-input__item-count').forEach((input) => {
      input.addEventListener('change', () => {
        const inputVal = Number(input.value);
        if (inputVal > 0) {
          minus.disabled = false;
        }
        input.value = inputVal;
        if (isNaN(inputVal)) input.value = '0';
        state[input.name] = input.value
        handlers[blockName].count(inputContent, state);
      })
    })
  })

  if (buttons !== null) {
    const clear = buttons.querySelector('[data-type="clear"]');
    const accept = buttons.querySelector('[data-type="accept"]');

    clear.addEventListener('click', () => {
      handlers[blockName].clear(inputContent, state);
      options.forEach(option => {
        option.querySelector('.dropdown-input__item-count').value = 0;
        option.querySelector('.dropdown-input__item-minus').disabled = true;
      });
    })
    
    accept.addEventListener('click', () => {
      inputField.classList.toggle('dropdown-input__field_expand');
      itemList.classList.toggle('dropdown-input__item-list_expand');
      handlers[blockName].accept(inputContent, state);
    })
  }
});

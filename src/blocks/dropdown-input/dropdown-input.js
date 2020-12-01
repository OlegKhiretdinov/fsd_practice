const dropDownInputs = document.querySelectorAll('.dropdown-input');

dropDownInputs.forEach((item) => {
  item.addEventListener('click', (e)=>console.log(e.target))
  document.body.addEventListener('click', () => console.log('BODY'))
})
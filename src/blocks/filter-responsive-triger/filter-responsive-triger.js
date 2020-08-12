const filter = document.querySelector('.filter-room');
const triger = document.querySelectorAll('.filter-responsive-triger');
const closeEl = document.createElement('div');
const trigerChar = document.querySelector('.filter-responsive-triger_char')

triger.forEach((item) => {
  item.addEventListener('click', () => {
    filter.classList.toggle('filter-room_visible');
    trigerChar.classList.toggle('filter-responsive-triger_char-down')
  });
}) 
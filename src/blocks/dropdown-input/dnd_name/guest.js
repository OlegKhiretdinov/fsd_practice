const words = {
  'guest': {
    '1': 'гость',
    '24': 'гостя',
    '5': 'гостей',
  }
}

const count = () => {
  return;
}

const clear = (input, state) => {
  input.innerHTML = 'сколько гостей';
  Object.keys(state).forEach((item) => state[item] = 0);
}

const accept = (input, state) => {
  if(Object.values(state).length === 0) return;
  const count = Object.values(state).reduce((a, b) => Number(a) + Number(b));
  if (Number(count) === 0) input.innerHTML = 'сколько гостей';
  if (Number(count) === 1) input.innerHTML = `${count} ${words.guest['1']}`;
  if (Number(count) > 1 && count < 5) input.innerHTML = `${count} ${words.guest['24']}`;
  if (Number(count) > 4 || count === 0) input.innerHTML = `${count} ${words.guest['5']}`;
}

export default { count, clear, accept };
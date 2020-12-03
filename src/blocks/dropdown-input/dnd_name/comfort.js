const words = {
  'bedroom': {
    '1': 'спальня',
    '24': 'спальни',
    '5': 'спален',
  },
  'bed' : {
    '1': 'кровать',
    '24': 'кровати',
    '5': 'кроватей',
  },
  'bathroom': {
    '1': 'ванная комната',
    '24': 'ванных комнат',
    '5': 'ванных комнат',
  },
}

const count = (input, state) => {
  const values = Object.entries(state).filter((item) => item[1] !== '0')
  const substr = values.map(item => {
    let count = Number(item[1]);
    if (count === 1) return `${count} ${words[item[0]]['1']}`;
    if (count > 1 && count < 5) return `${count} ${words[item[0]]['24']}`;
    if (count > 4 || count === 0) return `${count} ${words[item[0]]['5']}`;
  });
  const str = substr.join(', ');
  input.innerHTML = (str.length > 22) ? str.slice(0, 21) + '…' : str;
}

const clear = () => {
  return;
}

const accept = () => {
  return;
}

export default { count, clear, accept };

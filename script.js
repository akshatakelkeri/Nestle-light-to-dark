function toggleMode(mode) {
  const body = document.querySelector('body');
  const card = document.querySelector('.productCard');
  const heading = document.querySelector('.heading');
  const cost = document.querySelector('.cost');

  
  if (mode === 'light') {
      body.style.backgroundColor = 'white';
      card.style.backgroundColor = 'white';
      heading.style.color='black'
      cost.style.color='black'
     
  } else if (mode === 'dark') {
      body.style.backgroundColor = 'black';
      card.style.backgroundColor = 'black';
      heading.style.color='white'
      cost.style.color='white'
  }
}

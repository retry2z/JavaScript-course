function solve() {
  const button = document.getElementById('formatItBtn');
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  button.addEventListener('click', x => {
    const result = input.textContent
      .replace(/\s+/g, ' ')
      .split('.')
      .map(x => x.trim())
      .filter(x => x);


    while (result.length > 0) {
      const p = document.createElement('p');
      p.innerHTML = result.splice(0, 3).join('. ') + '.';
      output.appendChild(p);
    }

  });
}
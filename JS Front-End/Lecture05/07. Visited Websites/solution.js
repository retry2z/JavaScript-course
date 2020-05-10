// function solve() {
//   const links = document.getElementsByClassName('link-1');


//   for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', event => {
//       let currentTarget = event.currentTarget;
//       let currentElement = currentTarget.getElementsByTagName('p')[0];
//       const visited = currentElement.innerHTML.split(' ');
//       visited[1] = Number(visited[1]) + 1;
//       currentElement.innerHTML = visited.join(' ');
//     });
//   }
// }
function solve() {
 
  let allLinks = document.getElementsByTagName("a");
  let allVisits = document.getElementsByTagName("p");
 
  for (let i = 0; i < allLinks.length; i++) {
    updateCount(allLinks[i], allVisits[i]);
  }
 
  function updateCount(link, visit) {
    link.addEventListener('click',function () {
      countOfVisits = Number(visit.innerHTML.match(/\d+/gim));
      countOfVisits++;
      visit.innerHTML = `visited ${countOfVisits} times`;
    });
  }
}
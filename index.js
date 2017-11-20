function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0];
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('ul.ranked-list li');

  lis.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n);
}


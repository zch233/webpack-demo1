import _ from 'lodash'
import '../style/style.scss'

async function component() {
  const element = document.createElement('div');
  console.log(111)
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
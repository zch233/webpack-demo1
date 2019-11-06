import _ from 'lodash'
import '../style/style.scss'

function component() {
  const element = document.createElement('div');
  const fn = {
    aa: () => {
      console.log(this)
    }
  }
  fn.aa()
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
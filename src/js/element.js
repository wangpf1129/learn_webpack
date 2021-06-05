import '../css/style.css';
import '../css/title.less';
import Img from '../img/boshi.jpeg';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '这是一段内容';

const bgEl = document.createElement('div');
bgEl.className = 'bg-image';

const imgEl = document.createElement('img');
imgEl.src = Img;

console.log(content.length);
document.body.appendChild(divEl);
document.body.appendChild(bgEl);
document.body.appendChild(imgEl);

// 获取id为"body-wrap"的元素
var bodyWrap = document.getElementById('body-wrap');

// 创建一个新的img元素
var newImg = document.createElement('img');
newImg.id = 'web_bg';
newImg.src = 'https://i0.hdslb.com/bfs/album/001ee7bb41d9e0ede1af7329af0263c8fa2b22e6.png';
newImg.setAttribute('data-type', 'photo');
newImg.setAttribute('data-ll-status', 'loading');
newImg.className = 'entered loading';

// 将新的img元素添加到div中
bodyWrap.appendChild(newImg);

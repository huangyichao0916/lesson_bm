const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  const val = document.getElementById('input').value;
  const xhr = new XMLHttpRequest();
  // http://127.0.0.1:8081/
  // http://127.0.0.1:8081/search
  xhr.open('get',
    `http://127.0.0.1:8081/search?keywords=${val}`,
    true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4
      && xhr.status === 200) {
      document.getElementById('songs').innerHTML = `
            接收到后端响应了：${xhr.response}
            `
    }
  }
  xhr.send();
})
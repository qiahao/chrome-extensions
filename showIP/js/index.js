function httpRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          callback(xhr.responseText);
      }
  }
  xhr.send();
}

let url = 'https://api.ttt.sh/ip/qqwry/'

httpRequest(url, function(rsp){
  let data = JSON.parse(rsp)
  document.getElementById('ip').innerText = `IP: ${data.ip}`;
});

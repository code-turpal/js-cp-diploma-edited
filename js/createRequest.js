function sendRequest(body, callback = (response) => {}) {
    const request = new XMLHttpRequest();
  
    request.open("POST", "https://jscp-diplom.netoserver.ru/", true);
    request.responseType = "json";
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(body);
  
    request.onload = () => {
      callback(request.response);
    };
  }
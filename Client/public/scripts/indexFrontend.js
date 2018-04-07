
const url = "http://localhost:3002/getInitData"
getInitData();

function getInitData() {
      var settings_get = {
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {
          "content-type": "application/json"
          }
      }
    $.ajax(settings_get).done(function (response) {
        console.log(response);
    });
}
var createObjectURL = function (file) {
  if (window.webkitURL) {
    return window.webkitURL.createObjectURL(file);
  } else if (window.URL && window.URL.createObjectURL) {
    return window.URL.createObjectURL(file);
  } else {
    return null;
  }
};

var xxx = document.getElementsByTagName("source")[2].src;
xhr = new XMLHttpRequest();
xhr.open("GET", xxx, true);
xhr.responseType = "blob";

xhr.onload = function (e) {
  if (this.status == 200) {
    var url = createObjectURL(
      new Blob([this.response], {
        type: "audio/mpeg",
      })
    );
    var uuu = xxx.split('/');
    var nameFile = uuu[uuu.length - 1];
    var link = document.createElement("A");
    link.setAttribute("href", url);
    link.setAttribute("Download", nameFile);
    link.appendChild(document.createTextNode("Download"));
    document.getElementsByClassName("di-title")[0].appendChild(link);
    //   document.getElementsByTagName("body")[0].appendChild(link);
  }
};
xhr.send();

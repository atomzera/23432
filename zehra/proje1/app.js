var kutuSayisi = 0
let html = ""
var kutuRengi = ""

function kutuOlustur() {
  kutuSayisi = document.getElementById("sayi").value
  kutuRengi = document.getElementById("renk").value
  html = ""

  for (let index = 0; index < kutuSayisi; index++) {
    html = html + `<div style="width: 100px; height: 100px; background-color: ${kutuRengi}; margin: 10px; display: inline-block;"> </div>` 
  }
  
  document.getElementById("alan").innerHTML = html
}


function alaniTemizle() {
  document.getElementById("alan").innerHTML = ""
}
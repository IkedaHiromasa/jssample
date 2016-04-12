function test() {
  var anser = document.getElementById('result');
  var txt = "" ;
  for (var i=1 ; i<=5 ; i++){
    for (var t=1 ; t<=5 ; t++){
      txt = txt + "™";
    }
  }
  anser.innerText = txt;
}
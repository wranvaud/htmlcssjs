(function() {

  var liwidth = $('.sidebar li a').width();
  console.log(liwidth);

  var autoReloadCheckbox = document.getElementById("checkreload");;
  autoReloadCheckbox.onchange=autoReload;
  function autoReload (checked) {
    console.log(this.getElementsByTagName('input').value);
    setTimeout(function(){
      //window.location.reload(1);
    }, 1000);

  }
})();

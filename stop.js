$("audio").on("play", function () {
  //cuando un audio empieza a reproducirse
  var current = this;
  $("audio").each(function () {
    if (this !== current) {
      //todos los demás
      this.pause(); //los pausamos
    }
  });
});

(function(){


  // var audio = new AudioTest.Sound(".ad-audio");

  // audio.setPauseButton("#btn_pause");
  // audio.setPlayButton("#btn_play");
  // audio.setForwardButton("#btn_forward", 10);



  var audio = new AudioTest.Sound({
    selector: ".ad-audio",
    source: "http://www.tonycuffe.com/mp3/tailtoddle_lo.mp3",
    playBtn: "#btn_play",
    pauseBtn: "#btn_pause",
    forwardBtn: "#btn_forward",
    deltaTime: 20
    });

}())

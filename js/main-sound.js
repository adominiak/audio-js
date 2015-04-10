(function(){

  var audio = new AudioTest.Sound({
    selector: ".ad-audio",
    source: "http://www.tonycuffe.com/mp3/tailtoddle_lo.mp3",
    playBtn: "#btn_play",
    pauseBtn: "#btn_pause",
    forwardBtn: "#btn_forward",
    deltaTime: 20
  });

  var audio_dynamic = new AudioTest.Sound({
    dynamicCreation:true,
    source: "http://www.tonycuffe.com/mp3/tailtoddle_lo.mp3",
    playBtn: "#btn_play2",
    pauseBtn: "#btn_pause2",
    forwardBtn: "#btn_forward2",
    deltaTime: 20
  });

}())

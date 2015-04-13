(function(){

  var audio = new AudioTest.Sound({
    selector: ".ad-audio",
    source: "http://www.tonycuffe.com/mp3/tailtoddle_lo.mp3",
    playBtn: "#btn_play",
    pauseBtn: "#btn_pause",
    forwardBtn: "#btn_forward",
    muteBtn: "#btn_mute",
    volumeDownBtn: "#btn_volume_down",
    volumeUpBtn: "#btn_volume_up",
    volumes: ".btn_volume",
    deltaTime: 20
  });

  var audio_dynamic = new AudioTest.Sound({
    dynamicCreation:true,
    source: "http://www.tonycuffe.com/mp3/tailtoddle_lo.mp3",
    playBtn: "#btn_play2",
    pauseBtn: "#btn_pause2",
    forwardBtn: "#btn_forward2",
    muteBtn: "#btn_mute2",
    volumeDownBtn: "#btn_volume_down2",
    volumeUpBtn: "#btn_volume_up2",
    volumes: ".btn_volume2",
    deltaTime: 20
  });

  document.getElementById('btn_one_shot').onclick = playOneShot;

  function playOneShot(){
    var s = new AudioTest.DynamicSound({
      source: "http://cdn.mos.musicradar.com//audio/samples/random-sequence-demos/RS_5-4BassB135D-04.mp3"
    });
  };

}())

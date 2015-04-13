(function() {

  function Sound(initializer) {
    this.create(initializer);
  };

  Sound.prototype.create = function(initializer) {
    if(initializer.dynamicCreation) {
      this.audio = new Audio();
    }
    else {
      var audios = $(initializer.selector);
      if(audios.length > 0) {
        this.audio = audios[0];
      }
    }
    if(!this.audio) {
      return;
    }
    this.audio.oncanplay = this.onAudioCanPlay;
    if(initializer.source) {
      this.audio.src = initializer.source;
    }
    if(initializer.playBtn) {
      this.setPlayButton(initializer.playBtn);
    }
    if(initializer.pauseBtn) {
      this.setPauseButton(initializer.pauseBtn);
    }
    this.deltaTime = initializer.deltaTime || 10;
    if(initializer.forwardBtn) {
      this.setForwardButton(initializer.forwardBtn);
    }
    if(initializer.backwardBtn) {
      this.setBackwardButton(initializer.backwardBtn);
    }
    if(initializer.toBeginingBtn) {
      this.setToBeginningButton(initializer.toBeginingBtn);
    }
    if(initializer.muteBtn) {
      this.setMuteButton(initializer.muteBtn);
    }
    if(initializer.volumeUpBtn) {
      this.setVolumeUpButton(initializer.volumeUpBtn);
    }
    if(initializer.volumeDownBtn) {
      this.setVolumeDownButton(initializer.volumeDownBtn);
    }
    if(initializer.volumes) {
      this.setVolumeButtons(initializer.volumes);
    }
  };

  Sound.prototype.setPlayButton = function( selector ) {
    this.btn_play = $(selector)[0];
    this.btn_play.onclick = this.play.bind(this);
  };
  Sound.prototype.setPauseButton = function( selector ) {
    this.btn_pause = $(selector)[0];
    this.btn_pause.onclick = this.pause.bind(this);
  };
  Sound.prototype.setForwardButton = function( selector ) {
    this.btn_forward = $(selector)[0];
    this.btn_forward.onclick = this.forward.bind(this);
  };
  Sound.prototype.setToBeginningButton = function( selector ) {
    this.btn_toBegining = $(selector)[0];
    this.btn_toBegining.onclick = this.toBegining.bind(this);
  };
  Sound.prototype.setMuteButton = function( selector ) {
    this.btn_mute = $(selector)[0];
    this.btn_mute.onclick = this.mute.bind(this);
  };
  Sound.prototype.setVolumeUpButton = function( selector ) {
    this.btn_volumeUp = $(selector)[0];
    this.btn_volumeUp.onclick = callWithParams(this.changeVolume.bind(this), 0.1) ;
  };
  Sound.prototype.setVolumeDownButton = function( selector ) {
    this.btn_volumeDown = $(selector)[0];
    this.btn_volumeDown.onclick = callWithParams(this.changeVolume.bind(this), -0.1) ;
  };
  Sound.prototype.setVolumeButtons = function( selector ) {
    this.btns_volumes = $(selector);
    for (var i = this.btns_volumes.length - 1; i >= 0; i--) {
      this.btns_volumes[i].onclick = callWithParams(this.setVolume.bind(this), $(this.btns_volumes[i]).attr("data-volume"));
    };
  };
  Sound.prototype.setSource = function( source ) {
    this.audio.src = source;
  };
  Sound.prototype.onAudioCanPlay = function() {
  };
  Sound.prototype.play = function() {
    this.audio.play();
  };
  Sound.prototype.pause = function() {
    this.audio.pause();
  };
  Sound.prototype.forward = function() {
    if(this.audio.currentTime + this.deltaTime < this.audio.duration) {
      this.audio.currentTime += this.deltaTime;
    }
    else {
      this.audio.currentTime = 0;
      this.audio.pause();
    }
  };
  Sound.prototype.backward = function() {
    var expectedTime = this.audio.currentTime - this.deltaTime;
    if(expectedTime >=0) {
      this.audio.currentTime = expectedTime;
    }
    else {
      this.audio.currentTime = 0;
      this.audio.pause();
    }
  };
  Sound.prototype.toBegining = function() {
    this.audio.currentTime = 0;
  };
  Sound.prototype.mute = function() {
    this.audio.muted = !this.audio.muted;
  };
  Sound.prototype.changeVolume = function(event, delta) {
    var volume = this.audio.volume + delta;
    this.audio.volume = Math.min(1,(Math.max(volume,0))) ;
  };
  Sound.prototype.setVolume = function(event, volume) {
    this.audio.volume = Math.min(1,(Math.max(volume,0))) ;
  };
  function callWithParams( callbackFunction, params) {
    var event = event || window.event;
    return function(event){
      callbackFunction(event, params);
    }
  }
  window.AudioTest = window.AudioTest || {};
  window.AudioTest.Sound = Sound;
}());

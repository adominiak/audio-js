(function() {

  function Sound(initializer) {
    this.create(initializer);
  };

  Sound.prototype.create = function(initializer) {
    var audios = $(initializer.selector);
    if(audios.length > 0) {
      this.audio = audios[0];
      this.audio.oncanplay = this.onAudioCanPlay;
      this.audio.load();

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
        this.setForwardButton(initializer.forwardBtn, this.deltaTime);
      }
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
  Sound.prototype.setForwardButton = function( selector, deltaTime ) {
    this.btn_forward = $(selector)[0];
    this.deltaTime = deltaTime;
    this.btn_forward.onclick = this.forward.bind(this);
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

  window.AudioTest = window.AudioTest || {};
  window.AudioTest.Sound = Sound;
}())

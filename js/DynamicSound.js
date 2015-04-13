(function() {

  function DynamicSound(initializer) {
    this.create(initializer);
  };

  DynamicSound.prototype.create = function(initializer) {
    this.audio = new Audio(initializer.source);
    this.audio.play();
  }
  window.AudioTest = window.AudioTest || {};
  window.AudioTest.DynamicSound = DynamicSound;
}());

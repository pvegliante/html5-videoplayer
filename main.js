var video = $("video")[0];
var fast = $("#fast")[0];
var slow = $("#slow")[0];
var play = $("#play")[0];


  // v.playbackRate = 1.5;
  // v.playbackRate = .5;
  // v.playbackRate = 1.0;

  

$("#fast").click(function() {
  video.playbackRate += .1;
});

$("#slow").click(function() {
  video.playbackRate -= .1;
});

$("#play").click(function() {
  video.playbackRate = 1.0;
});

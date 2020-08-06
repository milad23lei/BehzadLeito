$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


function show() {
  var x = document.getElementById("textAudio").innerHTML;
  document.getElementById("demo").innerHTML = x;
}


// function decreaseVolumn() {
//   song.volume -= 0.2;
// }
// function increaseVolumn() {
//   song.volume += 0.2;
// }

function showText() {
  var textSong = document.getElementById("textSong");
  textSong.style.height = "3550px";
}

function closeText() {
  var textSong = document.getElementById("textSong");
  textSong.style.height = "0px";
}

// JQUERY

$(document).ready(function () {

  $("#back-to-top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $("#back-to-top").fadeIn(200);
    } else {
      $("#back-to-top").fadeOut(200);
    }
  });
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      }, 1000
    );
    return false;
  });

  $(window).scroll(function () {


    if ($(this).scrollTop() > 85) {
      $('#audio-image-animation img').css('position', 'sticky');
      $('#audio-image-animation img').css({ width: '150px', height: '150px', transition: 'all 0.44s ease' });
    } else {
      $('#audio-image-animation img').css('position', 'relative');
      $('#audio-image-animation img').css({ width: '200px', height: '200px', transition: 'all 0.44s ease' });

    }
  });

});


var audio;

//Hide Pause Initially
$('#pause').hide();


//Initializer - Play First Song
initAudio($('#playlist li:first-child'));

function initAudio(element) {
  var song = element.attr('song');
  var title = element.attr('nameSong');
  var cover = element.attr('cover');
  var coverAnimation = element.attr('coverAnimation');
  var artist = element.attr('artist');


  //Create a New Audio Object

  audio = new Audio('/mp3/' + song);

  $('#music-info .title').text(title);
  $('#music-info .artist').text(artist);

  $('#audio-info-modal .title').text(title);
  $('#audio-info-modal .artist').text(artist);



  //Insert Cover Image
  $('img.cover').attr('src', 'img/music-cover/' + cover);
  $('img.cover-animation').attr('src', 'img/music-cover/' + coverAnimation);
  setTimeout(showDuration, 1000);
  $('#playlist li').removeClass('active');
  element.addClass('active');
}
// 

var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var songSlider = document.getElementById('songSlider');

setInterval(updateSongSlider, 1000);

function updateSongSlider() {

  var c = Math.round(audio.currentTime);
  songSlider.value = c;
  currentTime.textContent = convertTime(c);
  if (audio.ended) {
    next();
  }
}

function seekSong() {
  audio.currentTime = songSlider.value;
  currentTime.textContent = convertTime(audio.currentTime);
}

function convertTime(secs) {
  var min = Math.floor(secs / 60);
  var sec = secs % 60;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;
  return (min + ":" + sec);
}

function showDuration() {
  var d = Math.floor(audio.duration);
  songSlider.setAttribute("max", d);
  duration.textContent = convertTime(d);
}


// 
function myFunction() {
  var x = document.getElementById("myDIV").innerHTML;
  document.getElementById("demo").innerHTML = x;
}

//Play Button
$('#play').click(function () {
  audio.play();
  $('#play').hide();
  $('#pause').show();
  $('#duration').fadeIn(400);
  showDuration();
});

//Pause Button
$('#pause').click(function () {
  audio.pause();
  $('#pause').hide();
  $('#play').show();
});

//Stop Button
$('#stop').click(function () {
  audio.pause();
  audio.currentTime = 0;
  $('#pause').hide();
  $('#play').show();
  $('#duration').fadeOut(400);
});

//Next Button 

function next() {
  audio.pause();
  var next = $('#playlist li.active').next();
  if (next.length == 0) {
    next = $('#playlist li:first-child');
  }
  if ($('#play').show()) {
    $('#play').hide();
    $('#pause').show();
  }
  initAudio(next);
  audio.play();
  showDuration();


}

// $('#next').click(function () {
//   audio.pause();
//   var next = $('#playlist li.active').next();
//   if (next.length == 0) {
//     next = $('#playlist li:first-child');
//   }
//   if ($('#play').show()) {
//     $('#play').hide();
//     $('#pause').show();
//   }
//   initAudio(next);
//   audio.play();
//   showDuration();
// 
//   s

// });


//Prev Button
$('#prev').click(function () {
  audio.pause();
  var prev = $('#playlist li.active').prev();
  if (prev.length == 0) {
    prev = $('#playlist li:last-child');
  }
  if ($('#play').show()) {
    $('#play').hide();
    $('#pause').show();
  }
  initAudio(prev);
  audio.play();
  showDuration();


});

//Playlist Song Click
$('#playlist li').click(function () {
  audio.pause();
  initAudio($(this));
  $('#play').hide();
  $('#pause').show();
  $('#duration').fadeIn(400);
  audio.play();
  showDuration();
});


//Volume Control
$('#volume').change(function () {
  audio.volume = parseFloat(this.value / 10);
});




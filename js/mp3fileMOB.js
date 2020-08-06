

var audio;

//Hide Pause Initially
$('#pause-sm').hide();


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

var CurrentTimes = document.getElementById('CurrentTimeSong');
var Durations = document.getElementById('DurationSong');
var SongSeek = document.getElementById('SongSliderSong');


setInterval(updateSongSeek, 1000);

function updateSongSeek() {

    var c = Math.round(audio.CurrentTimes);
    SongSeek.value = c;
    CurrentTimes.textContent = convertTimeSong(c);
    if (audio.ended) {
        next();
    }
}

function SeekBar() {
    audio.CurrentTimes = SongSeek.value;
    CurrentTimes.textContent = convertTimeSong(audio.CurrentTimes);
}

function convertTimeSong(secs) {
    var min = Math.floor(secs / 60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}

function showDurations() {
    var d = Math.floor(audio.Durations);
    SongSeek.setAttribute("max", d);
    Durations.textContent = convertTimeSong(d);
}

$('#play-sm').click(function () {
    audio.play();
    $('#play-sm').hide();
    $('#pause-sm').show();
    $('#DurationSong').fadeIn(400);
    $('.cover-animation').css({ animationPlayState: 'running' });
    showDurations()

});

$('#pause-sm').click(function () {
    audio.pause();
    $('#pause-sm').hide();
    $('#play-sm').show();
    $('.cover-animation').css({ animationPlayState: 'pause' });

});

$('#stop-sm').click(function () {
    audio.pause();
    audio.currentTime = 0;
    $('#pause-sm').hide();
    $('#play-sm').show();
    $('#DurationSong').fadeOut(400);

});


$('#next-sm').click(function () {
    audio.pause();
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    if ($('#play-sm').show()) {
        $('#play-sm').hide();
        $('#pause-sm').show();
    }
    initAudio(next);
    audio.play();
    showDurations()
});


$('#prev-sm').click(function () {
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child');
    }
    if ($('#play-sm').show()) {
        $('#play-sm').hide();
        $('#pause-sm').show();
    }
    initAudio(prev);
    audio.play();
    showDurations()

});


$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
    $('#play-sm').hide();
    $('#pause-sm').show();
    $('#DurationSong').fadeIn(400);
    audio.play();
    showDurations();


});
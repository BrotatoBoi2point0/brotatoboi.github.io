var frame;

function site_load() {
    frame = document.getElementById('mainframe');
    frame.src = './home.html';
}

function change_frame(toFrame) {
    if(toFrame == 'home') {
        frame.src = './home.html';
    } else if(toFrame == 'games') {
        frame.src = './games.html';
    } else if(toFrame == 'tutorials') {
        frame.src = './tutorials.html';
    } else if(toFrame == 'other') {
        frame.src = './other.html';
    }
}

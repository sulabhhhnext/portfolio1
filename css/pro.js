function setupMarquee(id) {
    const track = document.getElementById(id);
    if (!track) return;
    const clone = track.innerHTML;
    track.innerHTML = clone + clone; // duplicate for seamless loop
}
setupMarquee('track1');
setupMarquee('track2');
/* Autoplay the hero only while visible; native controls keep playback accessible. */
(() => {
    const video = document.querySelector(".bbh-video");
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let userPaused = false;
    let automaticPause = false;

    const pauseAutomatically = () => {
        if (!video.paused) {
            automaticPause = true;
            video.pause();
        }
    };

    const updatePlayback = () => {
        if (!visible || document.hidden || reducedMotion.matches) {
            pauseAutomatically();
            return;
        }
        if (!userPaused && video.paused) video.play().catch(() => {});
    };

    video.addEventListener("pause", () => {
        if (!automaticPause) userPaused = true;
        automaticPause = false;
    });
    video.addEventListener("play", () => { userPaused = false; });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            updatePlayback();
        }, { threshold: 0.15 });
        observer.observe(video);
    } else {
        visible = true;
        updatePlayback();
    }

    document.addEventListener("visibilitychange", updatePlayback);
    reducedMotion.addEventListener("change", updatePlayback);
})();

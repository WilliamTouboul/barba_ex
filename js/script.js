function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();

    tl.to(".loading_screen", {
        duration: 1.2,
        height: "100%",
        bottom: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading_screen", {
        duration: 1,
        width: "100%",
        bottom: "200%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });

    tl.set(".loading_screen", {
        bottom: "-100%"
    });

}


function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate_this", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.4,
        delay: 0.2
    });
}


$(function () {
    barba.init({
        sync: true,

        transitions: [{
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },
        }, ],
    });
});
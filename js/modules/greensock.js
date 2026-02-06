export function greensockAnim() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".anim-ab", {
        duration: 1,
        autoAlpha: 0,
        stagger: 1
    });

    gsap.utils.toArray(".content-card").forEach((card) => {
        gsap.from(card, {
            autoAlpha: 0,
            y: 50,
            duration: 1,
            ease: "easein",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reset",
                markers: false
            }
        });
    })

    gsap.from(".anim-c", {
        duration: 2,
        autoAlpha: 0,
        stagger: 2
    });

}
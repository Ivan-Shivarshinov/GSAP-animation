document.addEventListener("DOMContentLoaded", () => {

    //Global variables

    const ease = 'power2.inOut';
    const duration = 1;

    //Hero section

    let heroAnimation = gsap.timeline();
    heroAnimation
        .from('.nav_logo_wrap', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0)
        .from('.nav_btn_wrap', {
            autoAlpha: 0,
            x: '5rem',
            ease: ease,
            duration: duration
        }, 0)
        .from('.hero_title', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0.33)
        .from('#btn_hero', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0.66)
        .from('.hero_thumbnail_item', {
            autoAlpha: 0,
            y: '5rem',
            stagger: 0.1,
            ease: ease,
            duration: duration
        }, 1)
        .from('.hero_visual_wrap', {
            autoAlpha: 0,
            x: '5rem',
            ease: ease,
            duration: duration
        }, 1.5)

    //Hero section       

    const sectionMission = document.querySelector('.mission_wrap');

    let animationMissionSection = gsap.timeline({
        scrollTrigger: {
            trigger: sectionMission,
            start: 'top 80%'
        }
    })

    animationMissionSection
        .from('.mission_title', {
            autoAlpha: 0,
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0)
        .from('.mission_text_wrap', {
            autoAlpha: 0,
            y: '5rem',
            ease: ease,
            duration: duration
        }, 0.66)

    //Features section

    const sectionFeatures = document.querySelector('.features_wrap');

    let animationFeaturesSection = gsap.timeline({
        scrollTrigger: {
            trigger: sectionFeatures,
            start: 'top 70%'
        }
    })

    animationFeaturesSection
        .from('.features_title', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0)
        .from('.features_text', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0.33)
        .from('#btn_features', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 0.66)
        .from('.features_card_wrap', {
            autoAlpha: 0,
            x: '5rem',
            stagger: 0.1,
            ease: ease,
            duration: duration
        }, 1)

    //CTA section 

    const sectionCTA = document.querySelector('.cta_wrap');

    let animationCtaSection = gsap.timeline({
        scrollTrigger: {
            trigger: sectionCTA,
            start: 'top 70%'
        }
    })

    animationCtaSection
        .from('.cta_card', {
            autoAlpha: 0,
            y: '5rem',
            ease: ease,
            duration: duration
        }, 0)
        .from('.cta_title', {
            autoAlpha: 0,
            y: '5rem',
            ease: ease,
            duration: duration
        }, 0.33)
        .from('#btn_cta', {
            autoAlpha: 0,
            y: '5rem',
            ease: ease,
            duration: duration
        }, 0.66)

    //Footer section

    const sectionFooter = document.querySelector('.footer_1_wrap');

    let animationFooterSection = gsap.timeline({
        scrollTrigger: {
            trigger: sectionFooter,
            start: 'top 80%'
        }
    })

    animationFooterSection
        .from('.footer_1_logo_wrap', {
            autoAlpha: 0,
            y: '-5rem',
            ease: ease,
            duration: duration
        }, 0)
        .from('.footer_1_social_wrap', {
            autoAlpha: 0,
            y: '5rem',
            ease: ease,
            duration: duration
        }, 0.33)
        .from('.footer_1_group_title', {
            autoAlpha: 0,
            y: '-5rem',
            stagger: 0.1,
            ease: ease,
            duration: duration
        }, 0.66)
        .from('.footer_1_group_item', {
            autoAlpha: 0,
            y: '5rem',
            stagger: 0.03,
            ease: ease,
            duration: duration
        }, 1)
        .from('.footer_1_bottom_text', {
            autoAlpha: 0,
            x: '-5rem',
            ease: ease,
            duration: duration
        }, 1.33)
        .from('.footer_1_bottom_item', {
            autoAlpha: 0,
            x: '5rem',
            stagger: 0.1,
            ease: ease,
            duration: duration
        }, 1.33)

})

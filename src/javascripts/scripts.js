// Add your scripts here
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.fav-img', {
  scrollTrigger: {
    trigger: '.fav-img',
    toggleActions: 'play none none none'
  },
  x: 400,
  rotation: 360,
  duration: 3
})

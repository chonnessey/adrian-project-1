// Add your scripts here
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// gsap.to('.fav-img', {
//   scrollTrigger: {
//     trigger: '.container',
//     start: 'top top',
//     toggleActions: 'restart pause reverse pause'
//   },
//   // x: 400,
//   rotation: 360,
//   duration: 3
// })

let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: '.container',
    pin: true,   // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=5000", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    }
  }
});

// add animations and labels to the timeline
tl
.to('.fav-img', {duration: 1, scale: 2, rotation: 90})
.addLabel("color")
.to(".fav-img", {scale: 1.7, rotation:180, duration: 1})
.to(".container", {backgroundColor: "#ba45d1"})
.addLabel("second-color")
.to('.fav-img', {scale: 1.4, rotation:270, duration: 1})
.to('.container', {backgroundColor: '#b861c9'})
.addLabel("third-color")
.to('.fav-img', {scale: 1, rotation:360, duration: 1})
.to('.container', {backgroundColor: '#c593cf'})
.addLabel("fourth-color")
.to('.fav-img', {rotation: 360, duration:1})
.to('.container', {backgroundColor: '#cda1d6'})
.to('.fav-img', {xPercent: 50, duration: 1, scale: 2})

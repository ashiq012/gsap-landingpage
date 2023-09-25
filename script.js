var move = gsap.timeline();

gsap.set(".a",{
    opacity:0,
    y:10,
})
gsap.set(".right img",{
    opacity:0,
    scale:0,
})
gsap.set("#a",{
    opacity:0,
    y:10,
})

move
.from(".left",{
width:0,
ease:Expo.easeInOut,
duration:1.6
})
.from(".right",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.6
    })
.to(".a",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:.8,
    y:0,
    stagger:.1,
    delay:-1
    })

.to(".right img",{
    scale:1,
    ease:Expo.easeInOut,
    duration:1.5,
    opacity:1,
    delay:-1.7
    })

.to("#a",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1.4,
    y:0,
    stagger:.1,
    delay:-1
    })
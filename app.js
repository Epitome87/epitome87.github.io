particlesJS('particles-js', {
  particles: {
    number: { value: 6 * 3, density: { enable: true, value_area: 800 } },
    // color: { value: '#33FCFF' },
    color: {
      value: ['#a0e9ff', '#a162e8', '#f093b0', '#edca85'],
    },
    shape: {
      type: ['polygon'],
      stroke: { width: 0, color: '#a0e9ff' },
      polygon: { nb_sides: 9 },
      image: { src: '', width: 100, height: 100 },
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.02,
        sync: false,
      },
    },
    size: {
      value: 200 / 4,
      random: true,
      anim: { enable: true, speed: 10, size_min: 80, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 400,
      color: '#33FCFF',
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'bubble' },
      onclick: { enable: true, mode: 'grab' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8 / 16,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

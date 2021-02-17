import { useEffect } from 'react';

// We are excluding this from loading at build time in gatsby-node.js
const LocomotiveScroll = typeof window !== 'undefined' ? require('locomotive-scroll').default : null;

const Scroll = (callbacks) => {
  useEffect(() => {
    let locomotiveScroll;
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('#___gatsby'),
      smooth: true,
      // smoothMobile: false,
      // getDirection: true,
      touchMultiplier: 2.5,
      // resetNativeScroll: false,
    });
    locomotiveScroll.update();

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll;

    locomotiveScroll.on('scroll', (func) => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute('data-direction', func.direction);
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [callbacks]);

  return null;
};

export default Scroll;

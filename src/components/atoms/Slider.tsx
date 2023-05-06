import React, { Children, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type Props = {
  interval?: number;
};

const Slider = ({ interval = 5, children }: React.PropsWithChildren<Props>) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, interval * 1000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );

  const slides = Children.toArray(children);

  return (
    <div ref={sliderRef} className='keen-slider'>
      {slides.map((slide, index) => (
        <div key={index} className='keen-slider__slide'>
          {slide}
        </div>
      ))}
    </div>
  );
};

export default Slider;

import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./flipcountdown.scss";

let formatNumber = (number) => {
  return number < 10 ? "0" + number : number;
};

export const FlipCountdown = ({current}) => {
  const [currentValue, setCurrentValue] = useState(current);
  const currentFormatted = useMemo(() => formatNumber(currentValue), [currentValue]);
  const nextFormatted = useMemo(() => formatNumber(currentValue - 1), [currentValue]);

  const container = useRef(null);

  
  useEffect(() => {
    container.current.classList.add('flip');
    let unsubscribe = document.querySelector(".number-counter__card")
      .addEventListener('transitionend', () => {
        setCurrentValue(current);
      });

      return () => {
        removeEventListener('transitionend', unsubscribe);
      };
  }, [current]);

  // Due to asynchronous nature of react I had to extract this operation
  // to a separate useEffect so it happens "right after" after the value changes
  useEffect(() => {
    container.current.classList.remove('flip');
  }, [currentValue])

  return (
    <div 
      className="number-counter" 
      data-current={currentFormatted} 
      data-next={nextFormatted}
      ref={container}
    >
      <div className="number-counter__dots"></div>
      <div className="number-counter__card">
        <p className="number-counter__ back">{nextFormatted}</p>
        <p className="number-counter__ front">{currentFormatted}</p>
      </div>
    </div>
  )
}

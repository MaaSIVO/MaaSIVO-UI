import { useEffect, useRef, useState } from "react";

// MAYBE ADD CLASS HERE ?? 
export const useHorizontalScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [direction, setDirection] = useState<string | null>(null);
  
    const onMouseEnterPrev = () => {
      setDirection('left');
    };
  
    const onMouseEnterNext = () => {
      setDirection('right');
    };
  
    const handleOnMouseLeave = () => {
      setDirection(null);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (direction) {
          const scrollOff = scrollRef.current?.scrollLeft;
          scrollRef.current?.scrollTo(scrollOffset + (direction === 'left' ? -1 : 1), 0);
          setScrollOffset(scrollOff ?? 0);
        }
      }, 5);
  
      return () => clearInterval(interval);
    }, [scrollOffset, direction]);

    return {
        onMouseEnterPrev,
        onMouseEnterNext,
        handleOnMouseLeave,
        scrollRef
    }
}
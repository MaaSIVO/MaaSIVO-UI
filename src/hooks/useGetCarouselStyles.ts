import { useEffect, useState } from "react";


export interface StylesType {
    [key: string]: React.CSSProperties;
  }
  
export const useGetCarouselStyles = (itemsLenght: number) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemStyles, setItemStyles] = useState<StylesType>({});
  
    const getStyles = () => {
      let zIndex = 0;
      const styles: StylesType = {};
      styles[activeIndex] = {
        transform: 'none',
        zIndex: 1,
        filter: 'none',
        opacity: 1
      };
      for (let i = activeIndex + 1; i < itemsLenght; i++) {
        zIndex++;
        styles[i] = {
          transform: `translateX(${120 * zIndex}px) scale(${
            1 - 0.2 * zIndex
          }) perspective(16px) rotateY(-1deg)`,
          zIndex: -zIndex,
          filter: 'blur(5px)',
          opacity: zIndex > 2 ? 0 : 0.6
        };
      }
      zIndex = 0;
      for (let i = activeIndex - 1; i >= 0; i--) {
        zIndex++;
        styles[i] = {
          transform: `translateX(${-120 * zIndex}px) scale(${
            1 - 0.2 * zIndex
          }) perspective(16px) rotateY(1deg)`,
          zIndex: -zIndex,
          filter: 'blur(5px)',
          opacity: zIndex > 2 ? 0 : 0.6
        };
      }
      setItemStyles(styles);
    };
  
    const handlePrev = () => {
      if (activeIndex - 1 >= 0) {
        setActiveIndex((oldIndex) => oldIndex - 1);
      }
    };
  
    const handleNext = () => {
      if (activeIndex + 1 < itemsLenght) {
        setActiveIndex((oldIndex) => oldIndex + 1);
      }
    };
  
    useEffect(() => {
      getStyles();
    }, [activeIndex]);


    return {
        activeIndex,
        handlePrev,
        handleNext,
        itemStyles
    }
}
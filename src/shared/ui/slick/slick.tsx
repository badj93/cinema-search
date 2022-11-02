import { useMemo } from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';

import styles from './slick.module.scss';

interface CustomArrow extends CustomArrowProps {
  side: 'right' | 'left';
  customClassName: string;
  customIconClassName: string;
}

const CustomArrow = ({
  onClick,
  side,
  customClassName,
  customIconClassName,
}: CustomArrow) => {
  return (
    <div className={customClassName} onClick={onClick}>
      <i className={`pi pi-caret-${side} ${customIconClassName}`} />
    </div>
  );
};

export const Slick = (props: Settings) => {
  const { children } = props;

  const settings = useMemo(
    () => ({
      ...props,
      prevArrow: (
        <CustomArrow
          customClassName={styles.prevArrow}
          customIconClassName={styles.prevArrowIcon}
          side={'left'}
        />
      ),
      nextArrow: (
        <CustomArrow
          customClassName={styles.nextArrow}
          customIconClassName={styles.nextArrowIcon}
          side={'right'}
        />
      ),
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    [props],
  );

  return <Slider {...settings}>{children}</Slider>;
};

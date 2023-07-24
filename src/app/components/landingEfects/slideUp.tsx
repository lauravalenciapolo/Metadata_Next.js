import React from 'react';
import Slide, { SlideProps } from '@mui/material/Slide';

interface SlideUpProps extends Omit<SlideProps, 'direction'> {
  in: boolean;
  slideDirection: 'up' | 'down' | 'left' | 'right'; // Define los valores permitidos para la dirección del deslizamiento
}

const SlideUp: React.FC<SlideUpProps> = ({ in: inProp, slideDirection, children, ...rest }) => {
  return (
    <Slide in={inProp} direction={slideDirection} timeout={2000} {...rest}>
      {children}
    </Slide>
  );
};

export default SlideUp;


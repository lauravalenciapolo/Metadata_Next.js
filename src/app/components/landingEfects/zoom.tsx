import Zoom, { ZoomProps } from '@mui/material/Zoom';

interface ZoomInProps extends Omit<ZoomProps, 'in'> {
  in: boolean;
}

const ZoomIn: React.FC<ZoomInProps> = ({ in: inProp, children, ...rest }) => {
  return (
    <Zoom in={inProp} {...rest} timeout={2000}>
      {children}
    </Zoom>
  );
};

export default ZoomIn;

import { MoonLoader } from 'react-spinners';
import { Overlay } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <MoonLoader color="#DA6A00" size={100} />
    </Overlay>
  );
};

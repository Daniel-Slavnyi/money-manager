import { LoaderWrapper } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <LoaderWrapper>
      <RotatingLines
        height="100"
        width="100"
        strokeColor="#24CCA7"
        ariaLabel="loader"
      ></RotatingLines>
    </LoaderWrapper>
  );
}

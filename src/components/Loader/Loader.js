import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className={css.wrapper}>
      <RotatingLines
        height="100"
        width="100"
        strokeColor="#24CCA7"
        ariaLabel="loader"
      ></RotatingLines>
    </div>
  );
}

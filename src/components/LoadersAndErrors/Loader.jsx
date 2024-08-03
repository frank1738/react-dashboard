import './LoaderError.css';
import { BeatLoader } from 'react-spinners';
const Loader = () => {
  return (
    <div className="loader-div">
      <BeatLoader size={25} color="var(  --clr-white)" />
    </div>
  );
};

export default Loader;

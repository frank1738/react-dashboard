import './LoaderError.css';
import { MdReportGmailerrorred } from 'react-icons/md';
const Error = () => {
  return (
    <div className="loader-div error">
      <MdReportGmailerrorred color="var(  --clr-white)" size={50} />
      <p>Server Error occured</p>
    </div>
  );
};

export default Error;

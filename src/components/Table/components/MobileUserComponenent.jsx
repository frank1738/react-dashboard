import { IoIosArrowDown } from 'react-icons/io';
import classNames from 'classnames';
import { useState } from 'react';

const MobileUserComponenent = ({ data, columns }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => {
    setOpenDetails((prev) => !prev);
  };

  return (
    <div className="mobile-user-component-div">
      <div className="mobile-user-component-header">
        <span>{data.name}</span>
        <IoIosArrowDown
          onClick={handleOpenDetails}
          size={20}
          className={classNames('mobile-user-component-icon', {
            'rotate-down': openDetails,
          })}
        />
      </div>
      {openDetails && (
        <div className="mobile-user-component-details">
          {columns.map((column) => (
            <div key={column.name}>
              <span>{column.name}</span>
              <span>{data[column.name]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileUserComponenent;

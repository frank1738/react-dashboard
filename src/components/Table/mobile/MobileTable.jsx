import { useState } from 'react';
import { MdReportGmailerrorred } from 'react-icons/md';

import MobileUserComponenent from '../components/MobileUserComponenent';
import MobileSearch from '../components/MobileSearch';

const MobileTable = ({ data, columns }) => {
  const [mobileData, setMobileData] = useState(data);
  return (
    <div>
      <MobileSearch setMobileData={setMobileData} data={data} />
      <div className="mobile-list-user">
        {mobileData.length > 0 ? (
          mobileData.map((data) => (
            <MobileUserComponenent
              key={data.id}
              data={data}
              columns={columns}
            />
          ))
        ) : (
          <div className="loader-div error">
            <MdReportGmailerrorred color="var(  --clr-white)" size={50} />
            <p>No entity found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTable;

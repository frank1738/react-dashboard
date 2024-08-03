import { LuSearch } from 'react-icons/lu';
import { filteredData } from '../../../utils/filter';

const MobileSearch = ({ setMobileData, data }) => {
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchData = filteredData(data, searchValue);
    setMobileData(searchData);
  };
  return (
    <div className="mobile-search">
      <input
        type="text"
        placeholder="search name, age, city ...."
        onChange={handleSearch}
      />
      <LuSearch size={24} color="var( --clr-white)" />
    </div>
  );
};

export default MobileSearch;

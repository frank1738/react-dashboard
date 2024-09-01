import { IoMdAdd } from 'react-icons/io';

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <IoMdAdd size={25} color="var( --clr-white)" />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          List your income and expenses. Prioritize essentials and savings.
          Track spending regularly and adjust as needed. This helps avoid debt
          and achieve financial goals.
        </p>
      </div>
    </div>
  );
};

export default Financial;

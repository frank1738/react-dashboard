import Table from '../../components/Table/Table';
import Loader from '../../components/LoadersAndErrors/Loader';
import Error from '../../components/LoadersAndErrors/Error';
import { useLoansData } from '../../hooks/UserApis';
import { loanColumns } from '../../data/loans/Loans';

const Loans = () => {
  const { data: loans, isLoading, error } = useLoansData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Table data={loans} columns={loanColumns} title="Loans" />
    </>
  );
};

export default Loans;

import { useSavingsData } from '../../hooks/UserApis';
import Loader from '../../components/LoadersAndErrors/Loader';
import Error from '../../components/LoadersAndErrors/Error';
import Table from '../../components/Table/Table';
import { savingsColumns } from '../../data/savings/savings';

const SavingsPage = () => {
  const { data: savings, isLoading, error } = useSavingsData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Table columns={savingsColumns} data={savings} title="Savings" />
    </>
  );
};

export default SavingsPage;

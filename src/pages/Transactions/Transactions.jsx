import Table from '../../components/Table/Table';
import { transactionColumns } from '../../data/transactions/transactions';
import { useTransactionData } from '../../hooks/UserApis';
import Loader from '../../components/LoadersAndErrors/Loader';
import Error from '../../components/LoadersAndErrors/Error';

const Transactions = () => {
  const { data: transactions, isLoading, error } = useTransactionData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Table
        columns={transactionColumns}
        data={transactions}
        title="Transactions"
      />
    </>
  );
};

export default Transactions;

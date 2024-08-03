import Loader from '../../components/LoadersAndErrors/Loader';
import Error from '../../components/LoadersAndErrors/Error';
import Table from '../../components/Table/Table';
import { subscriptionColumns } from '../../data/subscriptions/subscriptions';
import { useSubscriptionsData } from '../../hooks/UserApis';

const Subscriptions = () => {
  const { data: subscriptions, isLoading, error } = useSubscriptionsData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <Table
        columns={subscriptionColumns}
        data={subscriptions}
        title="Subscriptions"
      />
    </>
  );
};

export default Subscriptions;

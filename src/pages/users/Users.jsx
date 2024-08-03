import Table from '../../components/Table/Table';
import { userColumns } from '../../data/user/user';
import { useUserData } from '../../hooks/UserApis';
import Loader from '../../components/LoadersAndErrors/Loader';
import Error from '../../components/LoadersAndErrors/Error';

const Users = () => {
  const { data: users, isLoading, error } = useUserData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Table columns={userColumns} data={users} title="Users" />
    </>
  );
};

export default Users;

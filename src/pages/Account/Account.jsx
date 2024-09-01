import './Account.css';
import { useProfileData } from '../../hooks/UserApis';
import Error from '../../components/LoadersAndErrors/Error';
import Loader from '../../components/LoadersAndErrors/Loader';
import AccountComponent from './components/AccountComponent';

const Account = () => {
  const { data: profileData, isLoading, error } = useProfileData();
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <AccountComponent profileData={profileData} />
    </>
  );
};

export default Account;

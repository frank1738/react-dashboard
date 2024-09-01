import { MdOutlineAccountBalance } from 'react-icons/md';
import { CiInboxIn } from 'react-icons/ci';
import { LiaTasksSolid } from 'react-icons/lia';

const AccountComponent = ({ profileData }) => {
  return (
    <div className="account-container-div">
      <div>
        <h2>Account Management</h2>
        <div className="account-details-1">
          <img src={profileData.img} alt="profile image" />
          <div>
            <h3>{profileData.name}</h3>
            <span>{profileData.role}</span>
            <span>{profileData.email}</span>
          </div>
        </div>
        <div className="account-details-1 account-details-2">
          <MdOutlineAccountBalance size={40} color="var( --clr-silver-v1)" />
          <div>
            <h3>My profile</h3>
            <span>Account setting</span>
          </div>
        </div>
        <div className="account-details-1 account-details-2">
          <CiInboxIn size={40} color="var( --clr-silver-v1)" />

          <div>
            <h3>My Inbox</h3>
            <span>Messages & Emails</span>
          </div>
        </div>
        <div className="account-details-1 account-details-2 account-3">
          <LiaTasksSolid size={40} color="var( --clr-silver-v1)" />
          <div>
            <h3>My Tasks</h3>
            <span>To-do & Daily Tasks</span>
          </div>
        </div>
        <button className="delete-btn">Delete My Account</button>
      </div>
    </div>
  );
};

export default AccountComponent;

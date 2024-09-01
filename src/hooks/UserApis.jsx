import { useQuery } from 'react-query';
import { fetchUserData } from '../data/user/user';
import { fetchTransactionData } from '../data/transactions/transactions';
import { fetchSubscriptionsData } from '../data/subscriptions/subscriptions';
import { fetchLoansData } from '../data/loans/Loans';
import { fetchSavingsData } from '../data/savings/savings';
import { fetchProfileData } from '../data/profile/profile';

export const useUserData = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUserData,
  });
};

export const useTransactionData = () => {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactionData,
  });
};

export const useSubscriptionsData = () => {
  return useQuery({
    queryKey: ['subscriptions'],
    queryFn: fetchSubscriptionsData,
  });
};

export const useLoansData = () => {
  return useQuery({
    queryKey: ['loans'],
    queryFn: fetchLoansData,
  });
};

export const useSavingsData = () => {
  return useQuery({
    queryKey: ['savings'],
    queryFn: fetchSavingsData,
  });
};

export const useProfileData = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfileData,
  });
};

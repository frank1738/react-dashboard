import { personsImgs } from '../../utils/images';

const profile = {
  name: 'Frankline Saint',
  role: 'Administrator',
  email: 'info@tech.com',
  img: personsImgs.person_five,
};

export const fetchProfileData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profile);
    }, 1000);
  });
};

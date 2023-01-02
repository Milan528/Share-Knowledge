import services from '../../../services';

export const loadUserInfoRepository = async (username) => {
  const dto = await services.get(`/users/username/${username}`);
  return dto.data;
};

export const changeAccountPasswordRepository = async (
  newPassword,
  confirmedPassword,
  email
) => {
  const dto = await services.post(`/auth/updatePassword`, {
    email,
    newPassword,
    password: confirmedPassword,
  });
  return dto.data;
};

export const changeAccountUsernameRepository = async (
  newUsername,
  confirmedPassword,
  email
) => {
  const dto = await services.post(`/auth/updateUsername`, {
    email,
    newUsername,
    password: confirmedPassword,
  });
  return dto.data;
};

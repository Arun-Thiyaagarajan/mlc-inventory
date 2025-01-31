const createTokenUser = (user) => {
  return { fullName: user.fullName, userId: user._id, role: user.role };
};

export default createTokenUser;

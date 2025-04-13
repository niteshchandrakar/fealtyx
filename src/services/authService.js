export const authenticateUser = (username, password) => {
  const mockUser = { username: 'testuser', password: 'testpass' };
  return username === mockUser.username && password === mockUser.password;
};

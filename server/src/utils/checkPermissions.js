import { UnauthorizedError } from '../errors/index.js';

const chechPermissions = (requestUser, resourceUserId) => {
  if (requestUser.role === 'admin') return;

  if (requestUser.userId === resourceUserId.toString()) return;
  
  throw new UnauthorizedError('Not authorized to access this route');
};

export default chechPermissions;

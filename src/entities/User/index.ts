export { useLazyGetCurrentUserQuery, useLazyLogoutQuery } from './api/userApi';
export { getUserAuthData } from './models/selectors/getUserAuthData/getUserAuthData';
export { userActions, userReduser } from './models/slice/userSlice';
export type { UserSchema, UserType } from './models/types/user';
export { UserGreeting } from './ui/UserGreeting/UserGreeting';

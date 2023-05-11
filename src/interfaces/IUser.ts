export interface IUser {
  id: string;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  token: string | null;
}

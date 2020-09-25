export default interface IUser {
  _id: string;
  email: string;
  username: string;
  password: string;
  days: Array<string>;
  fields: Array<string>;
  notes: Array<string>;
  jobs: Array<string>;
  token: string;
}
export interface IUserResponse {
  token: string;
  user: IUser;
}

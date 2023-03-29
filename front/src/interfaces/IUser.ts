export interface IGenre {
  weight: number;
  genre: string;
  color: string;
}
export interface IPost {
  title: number;
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  token: string | null;
  genre: IGenre;
}

// export interface IUser {
//   [key: string]: any;
// }

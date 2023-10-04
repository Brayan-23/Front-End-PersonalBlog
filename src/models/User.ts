import Postagem  from "./Post";

export default interface Usuario {
  id: number;
  name: string;
  usr: string;
  photo: string;
  password: string;
  posts?: Postagem | null;
}
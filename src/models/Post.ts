import Tema from './Theme';
import Usuario from './User'

export default interface Postagem {
  id: number;
  title: string;
  text: string;
  date: string;
  theme: Tema | null;
  user: Usuario | null;
}
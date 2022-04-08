export interface INote {
  id: number;
  name: string;
  content: string;
  dates: string[];
  created: string;
  updated: string;
  categoryId: number;
  archived?: boolean;
}

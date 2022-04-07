export interface Note {
  id: number;
  name: string;
  content: string;
  dates?: string[];
  created?: any;
  updated?: any;
  categoryId: number;
}

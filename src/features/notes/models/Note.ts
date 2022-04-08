import { parseDate, formatDate, uuid } from "../helpers";

export const Note = (name: string, content: string, categoryId: number) => ({
  id: uuid(),
  name,
  content,
  categoryId,
  dates: parseDate(content),
  created: formatDate(Date.now()),
  updated: formatDate(Date.now()),
  archived: false,
});

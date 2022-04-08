import { FC, useState } from "react";
import { INote } from "../interfaces/INote";
import { NotesEditForm } from "./NotesEditForm";
import { NotesTableRow } from "./NotesTableRow";

interface PropsItem {
  note: INote;
}

export const NotesItem: FC<PropsItem> = ({ note }) => {
  const [isEdit, setIsEdit] = useState(false);
  const changeIsEditHandler = () => setIsEdit(!isEdit);
  return isEdit ? (
    <NotesEditForm note={note} changeIsEditHandler={changeIsEditHandler} />
  ) : (
    <NotesTableRow note={note} changeIsEditHandler={changeIsEditHandler} />
  );
};

import React from "react";
import { Note } from "../interfaces/Note";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCategories, removeNote } from "../notesSlice";
import { formatDate } from "../helpers";

export function NotesItem({ note }: { note: Note }) {
  const { id, name, created, categoryId, content, dates } = note;
  const categories = useAppSelector(selectCategories);
  const category = categories.find((c) => c.id === categoryId);
  const dispatch = useAppDispatch();
  const onRemoveNoteHandler = () => dispatch(removeNote({ id }));
  return (
    <tr>
      <th>{name}</th>
      <th>{formatDate(created)}</th>
      <th>{category?.name}</th>
      <th>{content}</th>
      <th>{dates?.join(" ")}</th>
      <th>
        <button>edit</button>
        <button>archived</button>
        <button onClick={onRemoveNoteHandler}>remove</button>
      </th>
    </tr>
  );
}

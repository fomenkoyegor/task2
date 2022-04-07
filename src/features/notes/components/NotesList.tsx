import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectNotes } from "../notesSlice";
import { NotesItem } from "./NotesItem";

export function NotesList() {
  const notes = useAppSelector(selectNotes);
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>created</th>
          <th>category</th>
          <th>content</th>
          <th>dates</th>
          <th>show</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <NotesItem key={note.id} note={note} />
        ))}
      </tbody>
    </table>
  );
}

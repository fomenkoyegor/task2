import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectNotes } from "../notesSlice";
import { NotesItem } from "./NotesItem";

export function NotesList() {
  const notes = useAppSelector(selectNotes);
  const [archivedNotes, setArchivedNotes] = useState(false);
  const onChangeArchivedNotesHandler = () => setArchivedNotes(!archivedNotes);
  let classNames = "table table-responsive";
  if (archivedNotes) classNames += " table-secondary";
  const notesArchive = notes.filter((note) => note.archived);
  const notesActive = notes.filter((note) => !note.archived);

  return (
    <table className={classNames}>
      <thead className="table-dark">
        <tr>
          <th>name</th>
          <th>created</th>
          <th>category</th>
          <th>content</th>
          <th>dates</th>
          <th>
            <button onClick={onChangeArchivedNotesHandler}>
              <i className="material-icons">backup</i>
              <span>{notesArchive.length}</span>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {archivedNotes
          ? notesArchive.map((note) => <NotesItem key={note.id} note={note} />)
          : notesActive.map((note) => <NotesItem key={note.id} note={note} />)}
      </tbody>
    </table>
  );
}

import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectNotes } from "../notesSlice";
import { NotesItem } from "./NotesItem";
import { FaArchive } from "react-icons/fa";

export function NotesList() {
  const notes = useAppSelector(selectNotes);
  const [archivedNotes, setArchivedNotes] = useState(false);
  const onChangeArchivedNotesHandler = () => setArchivedNotes(!archivedNotes);
  const notesArchive = notes.filter((note) => note.archived);
  const notesActive = notes.filter((note) => !note.archived);

  return (
      <div className="table w-full mt-3">

        <div className="table-header-group">
          <div className="table-row bg-slate-500 text-white">
            <div className="table-cell text-center p-3">Name</div>
            <div className="table-cell text-left">Created</div>
            <div className="table-cell text-left">Category</div>
            <div className="table-cell text-left">Content</div>
            <div className="table-cell text-left">Dates</div>
            <div className="table-cell text-left">
              <button
                  className="mr-1"
                  onClick={onChangeArchivedNotesHandler}
              >
                <FaArchive />
              </button>
              <span>
                {notesArchive.length}
              </span>
            </div>
          </div>
        </div>

        <div className="table-row-group">
          {archivedNotes
                    ? notesArchive.map((note) => <NotesItem key={note.id} note={note} />)
                    : notesActive.map((note) => <NotesItem key={note.id} note={note} />)}
        </div>


      </div>
  );
}

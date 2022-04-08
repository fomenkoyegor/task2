import React from "react";
import { CategoriesList } from "./components/CategoriesList";
import { NotesCreate } from "./components/NotesCreate";
import { NotesList } from "./components/NotesList";

export function NotesContainer() {
  return (
    <div className="container">
      <NotesList />
      <NotesCreate />
      <CategoriesList />
    </div>
  );
}

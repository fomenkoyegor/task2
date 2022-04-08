import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { ICategory } from "../interfaces/ICategory";
import { selectNotes, selectCategories } from "../notesSlice";
import { CategoriesItem } from "./CategoriesItem";

export function CategoriesList() {
  const notes = useAppSelector(selectNotes);
  const categories = useAppSelector(selectCategories);

  const joinNotes = (cat: ICategory) => ({
    ...cat,
    active: notes.filter((note) => note.categoryId === cat.id && !note.archived)
      .length,
    archived: notes.filter(
      (note) => note.categoryId === cat.id && note.archived
    ).length,
  });

  const categoriesWithActiveArchiveNote = categories.map(joinNotes);

  return (
    <table className="table table-responsive">
      <thead className="table-dark">
        <tr>
          <th>Note category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody>
        {categoriesWithActiveArchiveNote.map((category) => (
          <CategoriesItem key={category.id} category={category} />
        ))}
      </tbody>
    </table>
  );
}

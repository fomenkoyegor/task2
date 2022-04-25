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
  return(
    <div className="table w-full mt-3">

      <div className="table-header-group">
        <div className="table-row bg-slate-500 text-white">
          <div className="table-cell text-center p-3">Note category</div>
          <div className="table-cell text-left">Active</div>
          <div className="table-cell text-left">Archived</div>
        </div>
      </div>

      <div className="table-row-group">
      {categoriesWithActiveArchiveNote.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
      </div>

    </div>
  )
}

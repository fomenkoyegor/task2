import React, { FC } from "react";
import { INote } from "../interfaces/INote";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCategories, removeNote, archiveNote } from "../notesSlice";
import { FaArchive, FaEdit, FaShoppingBasket } from "react-icons/fa";

type PropsItem = {
  note: INote;
  changeIsEditHandler: Function;
};

export const NotesTableRow: FC<PropsItem> = ({ note, changeIsEditHandler }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const category = categories.find((c) => c.id === note.categoryId);
  const onArchveNoteHandler = () => dispatch(archiveNote({ id: note.id }));
  const onRemoveNoteHandler = () => dispatch(removeNote({ id: note.id }));
  return (
      <div className="table-row bg-slate-200 hover:bg-slate-400">

          <div className="table-cell p-2 align-middle">
              <button className="bg-slate-800 text-white p-2 rounded-full inline-block mr-1">
                  {category?.icon()}
              </button>
              {note.name}
          </div>
          <div className="table-cell align-middle ">
              {note.created}
          </div>
          <div className="table-cell align-middle">
              {category?.name}
          </div>
          <div className="table-cell overflow-hidden w-1/4 align-middle">
              <p className='line-clamp-3'>
                  {note.content}
              </p>
          </div>
          <div className="table-cell align-middle ">
              {note.dates?.join(" ")}
          </div>
          <div className="table-cell align-middle ">
              <button
                  onClick={()=>changeIsEditHandler()}
                  className="bg-slate-800 text-white p-2 rounded-full inline-block mr-1">
                  <FaEdit />
              </button>
              <button
                  onClick={()=>onArchveNoteHandler()}
                  className="bg-slate-800 text-white p-2 rounded-full inline-block mr-1">
                  <FaArchive />
              </button>
              <button
                  onClick={()=>onRemoveNoteHandler()}
                  className="bg-slate-800 text-white p-2 rounded-full inline-block mr-1">
                  <FaShoppingBasket />
              </button>
          </div>

      </div>
  );
};

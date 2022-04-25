import React, { FC, useState } from "react";
import { INote } from "../interfaces/INote";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCategories, updateNote } from "../notesSlice";
import { Note } from "../models/Note";

type PropsItem = {
  note: INote;
  changeIsEditHandler: Function;
};

export const NotesEditForm: FC<PropsItem> = ({ note, changeIsEditHandler }) => {
  const { name, content, categoryId, id, created } = { ...note };
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const [getName, setName] = useState(name);
  const [getContent, setContent] = useState(content);
  const [getCategoryId, setCategoryId] = useState(categoryId);

  const onChangeNameHandler = (e: any) => {
    setName(e.target.value);
  };
  const onChangeContentHandler = (e: any) => {
    setContent(e.target.value);
  };
  const onChangeCategoryHandler = (e: any) => {
    setCategoryId(e.target.value);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const note = Note(getName, getContent, +getCategoryId);
    dispatch(
      updateNote({ note: { ...note, id, created, updated: note.created } })
    );
    changeIsEditHandler();
  };
  return (
    <div className="table-row bg-slate-200 hover:bg-slate-400">
      <div className="table-cell p-2 align-middle">

        <form onSubmit={onSubmitHandler} className='w-full bg-white shadow rounded p-8'>
          <div className="form-group">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              required
              placeholder="name"
              value={getName}
              onChange={onChangeNameHandler}
            />
          </div>
          <div className="form-group">
            <textarea
              className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name="content"
              required
              placeholder="content"
              defaultValue={getContent}
              onChange={onChangeContentHandler}
            ></textarea>
          </div>
          <div className="form-group">
            <select
              className='orm-select
              appearance-none
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              name="categoryId"
              required
              onChange={onChangeCategoryHandler}
            >
              <option value={categoryId}>defualt</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mt-2">
            <button type="submit" className="bg-cyan-400 p-1 rounded mr-1">
              save
            </button>
            <button
              onClick={() => {
                changeIsEditHandler();
              }}
              type="button"
              className="bg-red-500 p-1 rounded mr-1"
            >
              cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

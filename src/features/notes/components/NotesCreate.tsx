import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCategories, addNote } from "../notesSlice";

export function NotesCreate() {
  const categories = useAppSelector(selectCategories);
  const [show, setShow] = useState(false);
  const onShowHandler = () => setShow(!show);
  const dispatch = useAppDispatch();
  const onCreateNoteHandler = (e: any) => {
    e.preventDefault();
    const { name, content, categoryId } = e.target.elements;
    dispatch(
      addNote({
        name: name.value,
        content: content.value,
        categoryId: +categoryId.value,
      })
    );
    e.target.reset();
    onShowHandler();
  };
  return (
    <div className="flex mt-3">
      <div className="w-1/2">
        {show ? (
          <form
            onSubmit={onCreateNoteHandler}
            className='w-full bg-white shadow rounded p-8'
          >
            <div className="form-group">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="name"
                name="name"
                required
              />
            </div>
            <div className="form-group mt-2">
              <textarea
                name="content"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder="content"
              ></textarea>
            </div>
            <div className="form-group">
              <select
                name="categoryId"
                className='form-select
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
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input type="submit" className="form-control bg-slate-400 rounded mt-1 p-2 text-white w-full cursor-pointer" />
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="w-1/2 justify-end items-center flex">
        <button
         className="text-white justify-self-end bg-slate-400 rounded p-1"
         onClick={onShowHandler}
        >
         create note
        </button>
      </div>
    </div>
  );
}

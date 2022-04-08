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
    <div className="row">
      <div className="col-10">
        {show ? (
          <form onSubmit={onCreateNoteHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                className="form-control"
                required
                placeholder="content"
              ></textarea>
            </div>
            <div className="form-group">
              <select name="categoryId">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input type="submit" className="form-control" />
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="col-2">
        <button onClick={onShowHandler}>create note</button>
      </div>
    </div>
  );
}

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
    <tr>
      <td>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              required
              placeholder="name"
              value={getName}
              onChange={onChangeNameHandler}
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              required
              placeholder="content"
              defaultValue={getContent}
              onChange={onChangeContentHandler}
            ></textarea>
          </div>
          <div className="form-group">
            <select
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
          <div className="form-group">
            <button type="submit" className="form-control btn btn-success">
              <i className="material-icons">check</i>
            </button>
            <button
              onClick={() => {
                changeIsEditHandler();
              }}
              type="button"
              className="form-control btn btn-danger"
            >
              <i className="material-icons">close</i>
            </button>
          </div>
        </form>
      </td>
    </tr>
  );
};

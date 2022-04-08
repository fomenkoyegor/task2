import { FC } from "react";
import { INote } from "../interfaces/INote";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCategories, removeNote, archiveNote } from "../notesSlice";

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
    <tr>
      <td>
        <i className="material-icons">{category?.icon}</i>
        <span>{note.name}</span>
      </td>
      <td>{note.created}</td>
      <td>{category?.name}</td>
      <td>{note.content}</td>
      <td>{note.dates?.join(" ")}</td>
      <td>
        <button
          onClick={() => {
            changeIsEditHandler();
          }}
        >
          <i className="material-icons">ads_click</i>
        </button>
        <button onClick={onArchveNoteHandler}>
          <i className="material-icons">backup</i>
        </button>
        <button onClick={onRemoveNoteHandler}>
          <i className="material-icons">dangerous</i>
        </button>
      </td>
    </tr>
  );
};

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { uuid } from "./helpers";
import { Category } from "./interfaces/Category";
import { Note } from "./interfaces/Note";

export interface NotesState {
  categories: Category[];
  notes: Note[];
}

const initialState: NotesState = {
  categories: [
    { id: 1, name: "Idea" },
    { id: 2, name: "Quote" },
  ],
  notes: [
    {
      id: 1,
      name: "shopping cart",
      content: "im fine",
      categoryId: 1,
      created: new Date().toLocaleString(),
      dates: [],
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = {
        id: uuid(),
        name: action.payload.name,
        content: action.payload.content,
        categoryId: action.payload.categoryId,
        created: Date.now().toLocaleString(),
      };
      state.notes = [...state.notes, note];
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.note.id ? action.payload.note : note
      );
    },
  },
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;
export const selectCategories = (state: RootState) => state.notes.categories;

export default notesSlice.reducer;

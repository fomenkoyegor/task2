import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICategory } from "./interfaces/ICategory";
import { INote } from "./interfaces/INote";
import { Category } from "./models/Category";
import { Note } from "./models/Note";

export interface NotesState {
  categories: ICategory[];
  notes: INote[];
}

const initialState: NotesState = {
  categories: [
    Category(1, "Task", "shopping_cart"),
    Category(2, "Random Thought", "settings_accessibility"),
    Category(3, "Idea", "model_training"),
    Category(4, "Quote", "more_horiz"),
  ],
  notes: [
    Note("shopping cart", "im fine 05.12.23", 1),
    Note("shopping cart", "im fine", 2),
    Note("shopping cart", "im fine 05.12.23 05/12/23", 3),
    Note("shopping cart", "im fine", 4),
    Note("shopping cart", "im fine", 1),
    Note("shopping cart", "im fine", 2),
    Note("shopping cart", "im fine", 3),
    Note("shopping cart", "im fine", 4),
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const name = action.payload.name;
      const content = action.payload.content;
      const categoryId = action.payload.categoryId;
      const note = Note(name, content, categoryId);
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
    archiveNote: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload.id);
      if (note) {
        state.notes = [...state.notes].map((n) =>
          n.id === note.id ? { ...note, archived: !note.archived } : n
        );
      }
    },
  },
});

export const { addNote, removeNote, updateNote, archiveNote } =
  notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;
export const selectCategories = (state: RootState) => state.notes.categories;

export default notesSlice.reducer;

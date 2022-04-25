import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICategory } from "./interfaces/ICategory";
import { INote } from "./interfaces/INote";
import { Category } from "./models/Category";
import { Note } from "./models/Note";
import { FaShopify, FaRandom, FaHotjar, FaQuoteRight } from "react-icons/fa";

export interface NotesState {
  categories: ICategory[];
  notes: INote[];
}

const initialState: NotesState = {
  categories: [
    Category(1, "Task", FaShopify),
    Category(2, "Random Thought", FaRandom),
    Category(3, "Idea", FaHotjar),
    Category(4, "Quote", FaQuoteRight),
  ],
  notes: [
    Note("shopping cart", "im fine 05.12.23", 1),
    Note("shopping", "im fine", 2),
    Note("cart", "im fine 05.12.23 05/12/23", 3),
    Note("one", "im fine", 4),
    Note("more", "im fine", 1),
    Note("time", "im fine", 2),
    Note("baby", "im fine", 3),
    Note("show", "im fine", 4),
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

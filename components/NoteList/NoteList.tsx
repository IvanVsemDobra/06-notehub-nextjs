"use client";

import { Note } from "@/types/note";
import css from "./NoteList.module.css";

export interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
  isPending: boolean;
}

const NoteList = ({ notes, onDelete, isPending }: NoteListProps) => {
  if (isPending) {
    return <p className={css.loading}>Loading notes...</p>;
  }

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.item}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

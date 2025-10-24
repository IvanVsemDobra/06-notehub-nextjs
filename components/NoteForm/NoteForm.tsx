"use client";
import { useState } from "react";
import styles from "./NoteForm.module.css";
import { NewNote } from "@/types/note";

interface NoteFormProps {
  onSubmit: (note: NewNote) => void;
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const [form, setForm] = useState<NewNote>({
    title: "",
    content: "",
    tag: "Todo",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", content: "", tag: "Todo" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
      />
      <select name="tag" value={form.tag} onChange={handleChange}>
        <option value="Todo">Todo</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Meeting">Meeting</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}

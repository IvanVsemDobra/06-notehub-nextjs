"use client";

import { useRouter } from "next/navigation";
import NoteForm from "@/components/NoteForm/NoteForm";
import { createNote } from "@/lib/api";
import type { NewNote } from "@/types/note";

export default function NewNotePage() {
  const router = useRouter();

  const handleSubmit = async (noteData: NewNote) => {
    try {
      await createNote(noteData);
      router.push("/notes");
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  return (
    <div>
      <h2>Create a new note</h2>
      <NoteForm onSubmit={handleSubmit} />
    </div>
  );
}

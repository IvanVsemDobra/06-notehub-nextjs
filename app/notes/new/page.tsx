"use client";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/NoteForm/NoteForm";
import { createNote } from "@/services/noteService";

export default function NewNotePage() {
  const router = useRouter();

  const handleSubmit = async (noteData: any) => {
    await createNote(noteData);
    router.push("/");
  };

  return (
    <div>
      <h2>Create a new note</h2>
      <NoteForm onSubmit={handleSubmit} />
    </div>
  );
}

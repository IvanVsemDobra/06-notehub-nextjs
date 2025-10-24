import axios from "axios";
import type { Note, NewNote } from "../types/note";

const BASE = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (params: {
  page: number;
  perPage: number;
  search?: string;
}): Promise<NotesHttpResponse> => {
  const { page, perPage, search } = params;
  const res = await axios.get<NotesHttpResponse>(`${BASE}/notes`, {
    params: { page, perPage, search },
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await axios.get<Note>(`${BASE}/notes/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return res.data;
};

export const createNote = async (newNote: NewNote): Promise<Note> => {
  const res = await axios.post<Note>(`${BASE}/notes`, newNote, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await axios.delete<Note>(`${BASE}/notes/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  return res.data;
};

import axios from "axios";
import type { Note, NoteData } from "../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const notesApi = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export async function fetchNotes(
  query: string,
  currentPage: number,
): Promise<FetchNotesResponse> {
  const { data } = await notesApi.get<FetchNotesResponse>("/notes", {
    params: {
      search: query,
      page: currentPage,
      perPage: 12,
    },
  });
  return data;
}

export async function createNote(noteData: NoteData): Promise<Note> {
  const { data } = await notesApi.post<Note>("/notes", noteData);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await notesApi.delete<Note>(`/notes/${id}`);
  return data;
}

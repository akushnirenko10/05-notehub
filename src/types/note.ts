export interface Note {
  content: string;
  createdAt: string;
  id: string;
  tag: string;
  title: string;
  updatedAt: string;
}

export interface NoteData {
  title: string;
  content: string;
  tag: string;
}

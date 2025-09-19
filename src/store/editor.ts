'use client';

import { create } from 'zustand';

type EditorState = {
  title: string;
  content: string;
  slug: string;
  setTitle: (v: string) => void;
  setContent: (v: string) => void;
  setSlug: (v: string) => void;
  loadFromStorage: () => void;
  saveToStorage: () => void;
  clearStorage: () => void;
};

const STORAGE_KEY = 'sv_blog_draft';

export const useEditorStore = create<EditorState>((set, get) => ({
  title: '',
  content: '',
  slug: '',
  setTitle: (v) => set({ title: v }),
  setContent: (v) => set({ content: v }),
  setSlug: (v) => set({ slug: v }),
  loadFromStorage: () => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      if (!raw) return;
      const parsed = JSON.parse(raw) as { title?: string; content?: string; slug?: string };
      set({
        title: parsed.title ?? '',
        content: parsed.content ?? '',
        slug: parsed.slug ?? '',
      });
    } catch {}
  },
  saveToStorage: () => {
    try {
      const { title, content, slug } = get();
      const data = JSON.stringify({ title, content, slug });
      if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, data);
    } catch {}
  },
  clearStorage: () => {
    try {
      if (typeof window !== 'undefined') localStorage.removeItem(STORAGE_KEY);
    } catch {}
    set({ title: '', content: '', slug: '' });
  },
}));

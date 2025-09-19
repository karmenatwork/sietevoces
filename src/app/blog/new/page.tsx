'use client';

import React, { useEffect, useMemo } from 'react';
import { useEditorStore } from '@/store/editor';
import ReactMarkdown from 'react-markdown';

export default function NewPostPage() {
  const { title, content, slug, setTitle, setContent, setSlug, loadFromStorage, saveToStorage, clearStorage } =
    useEditorStore();

  useEffect(() => {
    loadFromStorage();
    const id = setInterval(saveToStorage, 1500);
    return () => clearInterval(id);
  }, [loadFromStorage, saveToStorage]);

  const canSave = useMemo(() => title.trim() && content.trim() && slug.trim(), [title, content, slug]);

  const handleSave = async () => {
    if (!canSave) return;
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title, content, slug }),
    });
    if (res.ok) {
      clearStorage();
      window.location.href = `/blog/${encodeURIComponent(slug)}`;
    } else {
      alert('Failed to save post');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">New Blog Post</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            aria-label="Title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
            placeholder="Slug (auto-kebab-case)"
            aria-label="Slug"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write in Markdown..."
            aria-label="Markdown editor"
            className="w-full h-80 border rounded px-3 py-2 font-mono text-sm focus:outline-none focus:ring"
          />
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={!canSave}
              className="bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Save
            </button>
            <span className="text-sm text-gray-500">Autosaves locally every ~1.5s</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <div className="prose max-w-none bg-white border rounded p-4">
            <ReactMarkdown>{content || '_Nothing to preview yet_'}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

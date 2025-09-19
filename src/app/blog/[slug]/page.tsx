import ReactMarkdown from 'react-markdown';

async function getPost(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/posts?slug=${encodeURIComponent(slug)}`, {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return (await res.json()) as { title: string; content: string; slug: string; createdAt?: string };
}

export default async function BlogPostPage({ params }: any) {
  const data = await getPost(params.slug);
  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="text-sm text-gray-500 mb-8">/{data.slug}</div>
      <div className="prose max-w-none">
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
    </article>
  );
}

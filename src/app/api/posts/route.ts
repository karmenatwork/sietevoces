import { NextResponse } from 'next/server';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const rows = await db().select().from(posts).where(eq(posts.slug, slug)).limit(1);
  if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(rows[0]);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { title?: string; content?: string; slug?: string } | null;
  if (!body?.title || !body?.content || !body?.slug) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  try {
    const [inserted] = await db()
      .insert(posts)
      .values({ title: body.title, content: body.content, slug: body.slug })
      .onConflictDoUpdate({
        target: posts.slug,
        set: { title: body.title, content: body.content },
      })
      .returning();
    return NextResponse.json(inserted, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to save post' }, { status: 500 });
  }
}

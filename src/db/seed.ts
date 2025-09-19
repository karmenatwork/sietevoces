import { db } from './index';
import { books } from './schema';

const sampleBooks = [
  {
    title: "Worthy",
    author: "Jamie Kern Lima",
    description: "How to Believe You Are Enough and Transform Your Life. A powerful guide to overcoming self-doubt and embracing your inherent worth.",
    image: "/books/worthy.jpg",
    isbn: "9781401974664",
    publishedYear: "2024",
    genre: "Self-Help"
  },
  {
    title: "The Greatest Mindset",
    author: "Lewis Howes",
    description: "Indestructible Lessons for Building an Unshakeable Mind. Learn to develop mental resilience and overcome life's challenges.",
    image: "/books/greatest-mindset.jpg",
    isbn: "9781401974671",
    publishedYear: "2024",
    genre: "Personal Development"
  },
  {
    title: "Believe IT",
    author: "Jamie Kern Lima",
    description: "How to Go from Underestimated to Unstoppable. A motivational guide to believing in yourself and achieving your dreams.",
    image: "/books/believe-it.jpg",
    isbn: "9781401974688",
    publishedYear: "2021",
    genre: "Motivation"
  }
];

export async function seedBooks() {
  try {
    console.log('Seeding books...');
    
    for (const book of sampleBooks) {
      await db().insert(books).values(book);
      console.log(`Added book: ${book.title}`);
    }
    
    console.log('Books seeded successfully!');
  } catch (error) {
    console.error('Error seeding books:', error);
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seedBooks();
}

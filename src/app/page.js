import { Product, FavoriteBtn } from "@/app/components";
import ThemeProvider from "@/app/context/ThemeContext";
export default function Home() {
  return (
    <main className="flex flex-col items-center mt-32 gap-12 text-xl">
      <h1>My Stores</h1>
      <ThemeProvider>
        {/* This is works we can pass server components as children or props 
        to client components and it still be server components.
        IMPORTANT: Server component will only be converted to client component if
        imported where 'use client' directive is used or its client component itself.
        */}
        <Product />
      </ThemeProvider>
      <FavoriteBtn />
    </main>
  );
}

// ANOTHER IMPORTANT NOTE:
// Using state management in server components is not recommended because it's not server side rendered.
// It's better to use state management in client components.
// for example redux,context api,zustand,etc.

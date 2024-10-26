import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <nav className="flex flex-col">
        <Link href="algorithms/game-of-life">Game of life</Link>
        <Link href="algorithms/sorting">Sorting</Link>
      </nav>
    </>
  );
}

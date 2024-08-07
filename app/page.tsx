"use client"

import React, { useState } from 'react';

import Bar from './bar';
import "./index.css"


export default function Home() {
  const arr = [1, 3, 5, 2, 4];
  const bars = arr.map((item, index) => {
    return (
      <Bar key={index} height={`${item*20 + 40}px`} />
    )
  });

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <div className="flex flex-row items-end">
        {bars}
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typewriter = ({ words }: { words: string[] }) => {
  const [text] = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <>
      {text}
      <span>
        <Cursor />
      </span>
    </>
  );
};

export default Typewriter;

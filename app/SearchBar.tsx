"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // secure if there is no input just return
    if (!input) return;
    // else redirect to & with the input value
    router.push(`/search/${input}`);
  };
  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handelSubmit}
    >
      <input
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-teal-500"
        type="text"
        placeholder="Search Info..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="text-teal-500 disabled:text-gray-500"
        type="submit"
        disabled={!input}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

"use client";

import { useRouter } from "next/navigation";

type Props = { article: Article };

const ReadMoreBtn = ({ article }: Props) => {
  const router = useRouter();
  const handelClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      className="bg-teal-900 h-10 rounded-b-lg dark:bg-teal-700 text-white dark:text-black"
      onClick={handelClick}
    >
      Read More
    </button>
  );
};

export default ReadMoreBtn;

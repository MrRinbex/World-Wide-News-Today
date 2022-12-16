"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = { article: Article };

const ReadMoreBtn = ({ article }: Props) => {
  // const router = useRouter();
  // const handelClick = () => {
  const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  // const url = `/article?${queryString}`;
  // router.push(url);
  // };
  return (
    <button className="text-center p-auto bg-teal-900 h-10 rounded-b-lg dark:bg-teal-700 text-white dark:text-black">
      <Link href={`/article?${queryString}`}>Read More</Link>
    </button>
  );
};

export default ReadMoreBtn;

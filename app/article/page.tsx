import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};
const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  )
    return notFound();
  const article: Article = searchParams;
  return (
    article.image && (
      <article>
        <section className="flex flex-col p-24 lg:px-10">
          {article.image && (
            <img
              className=" basis-4/12 lg:object-fill "
              src={article?.image}
              alt={article.title}
            />
          )}
          <div className="basis-8/12">
            <div className="p-5">
              <h1 className="headerTitle px-0 no-underline pb-2">
                {article.title}
              </h1>
            </div>
            <div className="flex divide-x-2 space-x-4 px-10 justify-center">
              <h2 className="font-bold">
                <span className="font-bold text-teal-900 dark:text-teal-700">
                  By:{" "}
                </span>
                {article.author !== "null" ? article.author : "unknown"}
              </h2>
              <h2 className="font-bold pl-4">
                <span className="font-bold text-teal-900 dark:text-teal-700">
                  Source:{" "}
                </span>
                {article.source === null ? "unknown" : article.source}
              </h2>
              <p className="pl-4">
                <span className="font-bold text-teal-900 dark:text-teal-700">
                  Published:{" "}
                </span>
                <LiveTimestamp time={article.published_at} />
              </p>
            </div>
            <div className="p-10 text-justify">
              <p>{article.description}</p>
            </div>
          </div>
        </section>
      </article>
    )
  );
};

export default ArticlePage;

import ReadMoreBtn from "./ReadMoreBtn";

type Props = { article: Article };

const Article = ({ article }: Props) => {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
          src={article.image}
          alt={article.title}
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-4">{article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        <ReadMoreBtn article={article} />
      </div>
    </article>
  );
};

export default Article;

import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";
import response from "../../response.json";

type Props = {
  searchParams?: { term: string };
};
const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse =
    response || (await fetchNews("general", searchParams?.term, true));
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;

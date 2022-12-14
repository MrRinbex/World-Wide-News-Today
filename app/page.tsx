import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

const Homepage = async () => {
  // fetch the news data

  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news);

  return <div>Homepage</div>;
};

export default Homepage;

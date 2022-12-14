import { request, gql } from 'graphql-request'
import sortNewsByImage from './sortNewsByImage';
const fetchNews =async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL queries
    const query = gql`
    query MyQuery(
        $access_key: String!,
        $categories: String!,
        $keywords: String
    )   {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "fr, gb, us"
        sort: "published_desc"
        keywords: $keywords
        ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

    // Fetch function with nextJs 13

    const res = await fetch('https://alagoinhas.stepzen.net/api/incendiary-ibex/__graphql', {
         method: 'POST',
         cache: isDynamic ? "no-cache" : "default",
         next: isDynamic ? {revalidate:0} : {revalidate:20},
         headers: {
             'Content-Type': 'application/json',
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables:{
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords:keywords, 
            } 
        }) 
    })

    console.log("LOADING DATA", category,keywords)

    const NewsResponse = await res.json()

    // Sort function by image if is available

    const newsQuery = sortNewsByImage(NewsResponse.data.myQuery) 

    // Return results

    return newsQuery 
}

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=541bce073def36fe580bce9dcd0e866f&source=business,sports

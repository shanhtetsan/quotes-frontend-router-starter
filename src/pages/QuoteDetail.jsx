// ============================================================
// QuoteDetail.jsx   (dynamic page — lives at "/quotes/:id")
//
// This page doesn't fetch anything — the quote data already
// exists in data/quotes.js. The job here is just: read the :id
// out of the URL, and find the matching quote.
// ============================================================

// TODO (Part 3): bring in the hook that reads path parameters from
//   the URL, and the link component. Docs:
//   https://reactrouter.com/start/declarative/url-values#useparams
import { useParams, Link } from "react-router-dom";
// TODO (Part 3): bring in the quotes data
import quotes from "../data/quotes";

function QuoteDetail() {
  // TODO (Part 3): read the id out of the URL using the params hook.
  //
  // Careful: that hook always gives you the id as a STRING, but each
  // quote's id in data/quotes.js is a NUMBER. Comparing a string to a
  // number directly will never match — convert one side before comparing.

  const {id} = useParams();

  // TODO (Part 3): find the quote in the array whose id matches.

  const quote = quotes.find((quote) => quote.id === Number(id));
  // TODO (Part 3): handle the "not found" case —
  //   if no quote matches (someone visits /quotes/999), render a
  //   short message instead of crashing. Don't assume a match exists
  //   before reading its text or author.

  if(!quote) {
    return (
      <div className="app">
        <h2>Quote not found.</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="app">
      {/* TODO (Part 3): render the quote's text and author */}
      {/* TODO (Part 3): a link back to the home page */}

      <h2 className = "quote-text">{quote.text}</h2>
      <p className = "quote-author">- {quote.author}</p>

      <Link to="/">Back to home</Link>
      
    </div>
  );
}

export default QuoteDetail

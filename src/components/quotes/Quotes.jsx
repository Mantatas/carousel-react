import { useEffect } from "react";

const Quotes = ({ setQuotes }) => {
  useEffect(() => {
    fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setQuotes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [setQuotes]);

  return null
};

export default Quotes;
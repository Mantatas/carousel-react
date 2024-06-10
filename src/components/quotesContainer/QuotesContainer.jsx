import React, { useState, useEffect } from "react";
import Quotes from "../quotes/Quotes";

const QuotesContainer = () => {
    const [quotes, setQuotes] = useState([]);

    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <Quotes setQuotes={setQuotes} />
            <div className="carousel-inner">
                {quotes.map((quote, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={quote.id}>
                        <div className="carousel-caption d-md-block">
                            <h5>{quote.author}</h5>
                            <p>{quote.quote}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default QuotesContainer;
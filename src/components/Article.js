import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    const lessThan30Mins = minutes < 30;
    const coffeeEmojis = [];
    const bentoEmojis = [];
    if (lessThan30Mins) {
        for (let i=0; i < (Math.ceil(minutes/5) * 5) / 5; i++) {
            coffeeEmojis.push("☕️");
        }
    } else {
        for (let i=0; i < (Math.ceil(minutes/10) * 10) / 10; i++) {
            bentoEmojis.push("🍱");
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} * {lessThan30Mins ? coffeeEmojis : bentoEmojis} {minutes} minute read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
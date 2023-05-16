import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    
    const renderedPosts = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} minutes={post.minutes} preview={post.preview}/>
    })

    return (
        <main>
            {renderedPosts}
        </main>
    )
}

export default ArticleList;
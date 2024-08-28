import React from 'react';

export default class RedditEmbedComponent extends React.Component {

    componentWillMount() {
        const script = document.createElement("script");
        script.src = "//embed.redditmedia.com/widgets/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }

    renderFrame = () => {
        return (
            <div className='reddit'>
                <blockquote className="reddit-embed-bq"  data-embed-height="740"><a href="https://www.reddit.com/r/isopods/comments/wpz1ro/i_painted_a_little_rubber_ducky/">I painted a little rubber ducky :)!</a><br/> by a user in <a href='https://www.reddit.com/r/isopods/'></a> in<a href="https://www.reddit.com/r/isopods/">isopods</a></blockquote>
            </div>
        );
    }

    render() {
        return (<div>
            {this.renderFrame()}
        </div>);
    }
}

export function RedditEmbed({url}:{url: string}){
        const script = document.createElement("script");
        script.src = "//embed.redditmedia.com/widgets/platform.js";
        script.async = true;
        document.body.appendChild(script);
    
        return(
            <div className='col reddit'>
            <blockquote className="reddit-embed-bq"  data-embed-height="740">
                <a href={url}></a>
                <br/> 
                <a href="https://www.reddit.com/r/isopods/"></a> in 
                <a href="https://www.reddit.com/r/isopods/">isopods</a>
            </blockquote>
        </div>
        )
}
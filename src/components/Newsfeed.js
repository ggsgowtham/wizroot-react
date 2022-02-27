import React from 'react';

const Newsfeed = (props) => {
    const newsFeed = props.data.map((news) => {
        return (
            <div key={news.id} className="ui cards container" style={{ marginTop: '3%'}}>
                <div className='card Newsfeed-card' style={{ width: '100%' }}>
                    <div className='content'>
                        <img className='right floated medium ui image' src= {news.urlToImage} alt="No data" />
                        <div className='header'>
                            {news.content}
                        </div>
                        <div className='meta'>
                            {news.author}
                            <span style={{ marginLeft: '5%' }}>{news.publishedAt}</span>
                        </div>
                        <div className='content' style={{ marginTop: '3%' }}>
                            {news.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return <div>{newsFeed}</div>
}

export default Newsfeed;
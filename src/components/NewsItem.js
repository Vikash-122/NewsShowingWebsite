import React from 'react';
import noImage from './noImage.jpg';

export default function NewsItem(props){
    const {title, desc, imgUrl, newsUrl, author, date, source, darkMode} = props;
    return (
      <div>
        <div className="card" style={{width: "18rem", 
          backgroundColor: darkMode? "#134569": "#e3c84f",
          color: props.darkMode? "white": "black"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
        </span>
          <img src= {imgUrl === null? noImage: imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small>By {author? author: "anonymous"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">More Detail</a>
          </div>
        </div>
      </div>
    )
}

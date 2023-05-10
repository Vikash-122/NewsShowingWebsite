import React, { useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default function News(props){

  document.title = `NewsMonkey -${props.category}`

  const [newsData, setNewsData] = useState(
    {articles: [], loading: false, page: 1, totalResults: 0});

  useEffect(()=>{
    async function afterRender(){    
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7cc4f5fbf4c047478b6e9abffe171331&page=${newsData.page}&pageSize=${props.pageSize}`;
      // this.setState({ loading: true });
      setNewsData((prev)=>({...prev, loading: true}));
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("mounting the data", newsData.page);
      setNewsData((prev)=>(
        {...prev, 
        articles: prev.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults , 
        loading: false}));
    }
    afterRender();
  },[newsData.page, props.country, props.category, props.pageSize])


  const fetchMoreData = () => {
    setNewsData((prev)=>({...prev, page: prev.page+1}));
    console.log("Page no is upadated to", newsData.page);
  }
    return (
      <div style={{backgroundColor: props.darkMode? "#5c7180": "wheat",
      color: props.darkMode? "white": "black"}}>
        <h1 className="text-center">Top headings</h1>
        <InfiniteScroll
          dataLength={newsData.articles.length}
          next={fetchMoreData}
          hasMore={newsData.articles.length === newsData.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {newsData.articles.map((element) => {
                return <div className="col-md-4 my-2" >
                  <NewsItem key={element.title} title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} darkMode={props.darkMode} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
}
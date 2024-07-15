/* eslint-disable react/jsx-no-undef */
import React, { useEffect,useState } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


const News =(props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
    
    // articles = [
    //     {
    //       "source": { "id": "news-com-au", "name": "News.com.au" },
    //       "author": "Andrew McMurtry",
    //       "title": "Wild scene cricket has ‘never seen before’",
    //       "description": "Welcome to news.com.au&rsquo;s day four coverage of the first Ashes Test.",
    //       "url": "https://www.news.com.au/sport/cricket/ashes-first-test-day-four-live/news-story/985bd1f0f60dd7efb54579dfcaa7f859",
    //       "urlToImage": "https://content.api.news/v3/images/bin/12f558bf24d6892f27bde1ba88ea0f75",
    //       "publishedAt": "2023-06-19T09:13:00Z",
    //       "content": "Welcome to news.com.au’s day four coverage of the first Ashes Test.\r\nThe Test is at an interesting stage after rain late on day three saw just 32.4 overs bowled with England left 2/28 in the second i… [+3784 chars]"
    //     },
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //       "publishedAt": "2020-04-27T11:41:47Z",
    //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //       "author": null,
    //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //       "publishedAt": "2020-03-30T15:26:05Z",
    //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
       
    //   ]
        document.title=`NewsHunt-${props.category}`

    const updateNews = async()=>{let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading({loading:true})
    let data= await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
  }
  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  }, [])

   const handlePrevClick = async() =>{
        setPage(page-1);
        updateNews();

        }
   
    const handleNextClick = async()=>{
        if(!page + 1 > Math.ceil(totalResults /props.pageSize)){

        }
        else{
          setPage(page+1);
          updateNews();
    }}
    // fetchMoreData =async () => {
    //   // a fake async api call like which sends
    //   // 20 more records in 1.5 secs
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${props.pageSize}`;
    //     setState({loading:true})
    //     let data= await fetch(url);
    //     let parsedData = await data.json();
    //     setState({
    //         page: state.page + 1,
    //         articles: state.articles.concat(parsedData.articles),
    //         totalResults: parsedData.totalResults,
    //         loading:false
    //     })
    // };

    return (
      <>
    <div className="container my-3">
        <h3 className="text-center" style={{margin:'35px 0px',marginTop:'85px'}}>NewsHunt - Top Headlines on {props.category}</h3>
         {loading && <Spinner/>} 
        {/* <InfiniteScroll>
          dataLength={state.articles.length}
          next={fetchMoreData}
          hasMore={state.articles.length !== state.totalResults}
          loader={<h4>{<Spinner/>}</h4>} */}
            {/* <div className="container my-3"> */}
          <div className="row">
         {!loading && articles.map((element)=>{ 
             return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
              })}
             
            {/* <div className="col-md-4">
               <NewsItem title="myTitle" description="mydesc"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="myTitle" description="mydesc"/>
            </div> */}
       </div> 
       {/* </InfiniteScroll> */}
       
     <div className="container d-flex justify-content-between">
       <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
       <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
       </div> 
    </div>
    </>
    )
  
}
News.defaultProps={
  country:'in',
  pageSize: '8',
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News

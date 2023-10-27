import React,{useEffect ,useState} from 'react'
import { Spinner } from './spinner'
import { NewsItem } from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export const News= (props)=> {
    const[articles, setArticales]=useState([])
    const[loading, setLoading]=useState(true)
    const[page, setPage]=useState(1)
    const[totalResults, setTotalResults]=useState(0)
    document.title = `${props.category}-Latest NEWS`

    const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews=async()=>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page${page}1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json()
        setArticales(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(()=>{
        updateNews();
    },[])

    /*const handlePrevClick = async () => {
       setPage(page-1) 
       updateNews();
    }
    const handleNextClick = async () => {
        setPage(page+1) 
        updateNews();
    }
    */
    const fetchMoreData=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page${page+1}1&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json()
        setArticales(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setPage(page+1);
    }
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '35px 0px' ,marginTop:'90px'}}>Latest News-{capitalizeFirstLetter(props.category)}</h1>
                {loading &&<Spinner/>}
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>}
                >
                    <div className='container'>
                        <div className='row'>
                        {articles.map((element)=>{
                            return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage}newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })
                        }
                        </div>
                    </div>
                </InfiniteScroll>

                {/*<div className="d-flex justify-content-between">
                    <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; prev</button>
                    <button disabled={page+1 >Math.ceil( totalResults/.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>next &rarr;</button>
                    </div>*/}
            </div >
        )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string
}
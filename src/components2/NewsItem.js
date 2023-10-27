import React  from 'react'
export const NewsItem =(props)=>{
        let {title, description,imgUrl,newsUrl,author,date} =props;
        return(
            <div className='new my-2'>
                <div className="card" style={{width: "18rem"}}>
                <img src={!imgUrl?"https://i.gadgets360cdn.com/large/samsung_galaxy_s23_series_samsung_1678531903312.jpg":imgUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
                </div>
                </div>
            </div>
        )
}
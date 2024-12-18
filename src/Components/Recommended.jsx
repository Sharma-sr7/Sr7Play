import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_converter } from '../data'
import { Link } from 'react-router-dom';
import moment from 'moment'

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url).then(res => res.json()).then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list" >
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="video-info">
                            <h4>{item.snippet.title}</h4>
                            <div className="video-details">
                                <p>{item.snippet.channelTitle} &bull;</p>
                                <p className='small-view-count'>{value_converter(item.statistics.viewCount)} Views &bull;</p>
                                <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                                
                            </div>
                        </div>
                    </Link>
                )

            })}


        </div>
    )
}

export default Recommended

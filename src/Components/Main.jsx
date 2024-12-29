import React, { useEffect, useState } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../data'
import moment from 'moment'

const Main = ({ category, searchValue, setCategory }) => {
    useEffect(() => {
        const value = searchValue.toLowerCase()
        if (value == "gaming" || value == "game") {
            setCategory(20)
        }
        if(value == "film" || value == "animation"){
            setCategory(1)
        }
        if(value == "auto" || value == "vehicles"){
            setCategory(2)
        }
        if(value == "music" || value == "songs"){
            setCategory(10)
        }
        if(value == "pets" || value == "animals"){
            setCategory(15)
        }
        if(value == "sports"){
            setCategory(17)
        }
        if(value == "short films"){
            setCategory(18)
        }
        if(value == "travel" || value == "events"){
            setCategory(19)
        }
        if(value == "gaming" || value == "games"){
            setCategory(20)
        }
        if(value == "comedy" || value == "fun videos"){
            setCategory(23)
        }
        if(value == "science" || value == "technology"){
            setCategory(28)
        }


    },[searchValue])


    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchData()
    }, [category])
    return (
        <div className="main">
            {data.map((item, index) => {
                return (
                    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <p>{item.snippet.channelTitle} &bull; {value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}

        </div>


    )
}

export default Main

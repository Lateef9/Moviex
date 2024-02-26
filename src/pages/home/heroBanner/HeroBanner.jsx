import "./style.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {useFetch} from "../../../hooks/useFetch"

const HeroBanner = () => {

  // const [Background,setBackground] = useState("");
  const [Query,setQuery] = useState("");
  const navigate = useNavigate();
  const {data,loading} = useFetch("/movie/upcoming")

  const searchQueryHandler =(event) =>{
    if(event.key === "Enter" && Query.length > 0){
      navigate(`/search/${Query}`)
    }

  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Millions of Movies ,TV shows and etc</span>
          <div className="searchInput">
            <input 
            type="text"
            placeholder="Search for movie"
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
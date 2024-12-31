import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, locality}= resData?.data;
    return(
      <div className="res-card" >
        <img alt="res-logo" src={CDN_URL + cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{locality}</h4>
      </div>
    )
  }
  export default RestaurantCard
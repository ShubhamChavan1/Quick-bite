import { CDN_URL } from "../utils/constants";

const RES_CARD = (props) => {
    const { res_data } = props
    const { name, locality, avgRating, cuisines, cloudinaryImageId, sla } = res_data?.info
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="food-img" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} ★</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
}

export default RES_CARD;
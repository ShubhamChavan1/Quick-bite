import { CDN_URL } from "../utils/constants";

const RES_CARD = (props) => {
    const { res_data } = props
    const { name, locality, avgRating, cuisines, cloudinaryImageId, sla } = res_data?.info

    return (

        <div className="flex justify-center items-center h-full">
            <div className="w-[250px] rounded-md border border-solid border-black hover:bg-gray-300 ">
                <div className="relative">
                    <img className="w-full h-auto rounded-t-md" src={CDN_URL + cloudinaryImageId} />
                    {props.children}
                </div>


                <div className="p-4">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <h4>{locality}</h4>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{avgRating} ★</h4>
                    <h4>{sla?.slaString}</h4>
                </div>
            </div>
        </div>
    );
}

/*higer order component taging rescard comp 
and returning a discounted components */

//parent component
export const withDiscountTag = (RES_CARD) => {
    return (props) => {
        const { res_data } = props
        const { header } = res_data?.info.aggregatedDiscountInfoV3
        const { avgRating } = res_data.info
        console.log(header)
        return (
            <>
                <RES_CARD {...props}>

                    {header !== "ITEMS" && (<label className="absolute top-0 left-0 m-2 p-3 bg-black text-white rounded-md">
                        {header}
                    </label>
                    )}
                    <label className="absolute bottom-0 right-0 bg-green-400 text-white m-2 p-3 rounded-md">
                        {avgRating}
                    </label>
                </RES_CARD>

            </>
        );
    }
}

export default RES_CARD;
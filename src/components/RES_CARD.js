import { CDN_URL } from "../utils/constants";

const RES_CARD = (props) => {
    const { res_data } = props

    // console.log(res_data)
    const { name, locality, cuisines, cloudinaryImageId, sla } = res_data?.info


    return (

        <div className="flex justify-center items-center h-full">
            <div className="w-[250px] h-[500px] rounded-md border border-solid border-black hover:bg-gray-300 ">
                <div className="relative">
                    <img className="max-w-full h-80 object-cover rounded-t-md" src={CDN_URL + cloudinaryImageId} />
                    {props.children}
                </div>

                <div className="p-4 ">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <h4>{locality}</h4>
                    <h4>{cuisines.slice(0, 3).join(" , ") + "..."}</h4>
                    <h4 className="font-bold">{sla?.slaString}</h4>
                </div>
            </div>
        </div>
    );
}

/*higer order component takes rescard comp 
and returning a discounted tagged rescard 
component */

//parent component
export const withDiscountTag = (RES_CARD) => {
    return (props) => {
        const { res_data } = props
        const { header } = res_data?.info.aggregatedDiscountInfoV3
        const { avgRating } = res_data.info

        return (
            <>
                <RES_CARD {...props}>

                    {header !== "ITEMS" && header !== "EVERY ITEM" &&
                        (<label className="absolute top-0 left-0 m-2 p-3 bg-black text-white rounded-md">
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
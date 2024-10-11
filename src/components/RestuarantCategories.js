import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItemList, setshowIndex }) => {

    // console.log(data)
    const { title } = data;
    return (
        <div className=" w-6/12 mx-auto my-5 p-4  shadow-md  font-bold cursor-pointer"  >
            <div className="flex justify-between mb-4"onClick={setshowIndex}  >
                <span >{title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>

            {showItemList && <ItemList itemsCards={data.itemCards} />}

        </div>

    );


}

export default RestaurantCategories;
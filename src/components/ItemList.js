import { CDN_URL } from "../utils/constants";
const ItemList = ({ itemsCards }) => {
    console.log(itemsCards)
    return (

        <div>
            {itemsCards.map((item) => (

                <div key={item.card.info.id} className="p-3 mb-3 flex justify-between   text-left border-black border-solid border-b-2" >

                    <div className="w-9/12">

                        <span>{item.card.info.name}</span>
                        <span className="mx-1"> ₹-{item.card.info.price / 100}</span>
                        <p className="mt-3 p-5 text-gray-500 font-mono">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12  p-4 relative">

                        <img className="w-full" src={CDN_URL + item.card.info.imageId} alt="food-image" />

                        <button className=" absolute bottom-2 right-2 bg-black text-white p-2">ADD+</button>
                    </div>

                </div>

            ))}
        </div>


    );

}

export default ItemList
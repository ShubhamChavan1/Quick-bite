
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
    const swiggAPI = "https://www.swiggy.com/dapi/restaurants/list/v5"


    const lat = (req.query.lat || '19.0760').trim();
    const lng = (req.query.lng || '72.8777').trim();

    try {
        const response = await axios.get(swiggAPI, {
            params: {
                lat,
                lng,
                'is-seo-homepage-enabled': true,
                page_type: 'DESKTOP_WEB_LISTING',
            },
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36"
            }

        });
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data from Swiggy API');
    }
});


app.get('/api/menu', async (req, res) => {
    try {
        const SwiggyMenu = 'https://www.swiggy.com/dapi/menu/pl'
        /*req.query is an object that contains all the query parameters as key-value pairs.
     You can access each parameter by its key directly, so req.query.restaurantId gives you the value associated with restaurantId. */
        const restaurantId = req.query.restaurantId
        const response = await axios.get(SwiggyMenu, {
            params: {
                "page-type": "REGULAR_MENU",
                'complete-menu': true,
                lat: '18.9910197',
                lng: '73.12076119999999',
                restaurantId: restaurantId,
            },
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",

            }
        })
        res.json(response.data);
        console.log(response.data)

    } catch (error) {
        console.log(error.response.status)
        console.log(error.response.headers)
        console.log(error.message)
        console.log(error.response.data)
    }
})


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

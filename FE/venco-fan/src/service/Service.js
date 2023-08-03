import axios from "axios";
export const getAllProduct = async () => {
    // const token = localStorage.getItem('token');
    try {
        const res = await axios.get("http://localhost:8080/api/product"
        // ,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         }
        //     }
            );
        return res.data;
    } catch (e) {
        console.log(e)
        return e
    }
}
export const getDetailProduct = async (id) => {
    // const token = localStorage.getItem('token');
    try {
        const res = await axios.get(`http://localhost:8080/api/product/${id}`
        // ,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         }
        //     }
            );
        return res.data;
    } catch (e) {
        console.log(e)
        return e
    }
}

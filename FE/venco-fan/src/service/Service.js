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
        const res = await axios.get(`http://localhost:8080/api/product/detail/${id}`
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
export const getImage = async (id) => {
    // const token = localStorage.getItem('token');
    try {
        const res = await axios.get(`http://localhost:8080/api/image/${id}`
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
export const getShoppingcart = async () => {
    const username = localStorage.getItem('username');
    try {
        const res = await axios.get(`http://localhost:8080/api/shopping/${username}`
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
export const setShoppingcart = async (index,id) => {
    try {
        const res = await axios.patch(`http://localhost:8080/api/shopping/${index}/${id}`
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
export const createShoppingcart = async (idProduct,quantity) => {
    const username = localStorage.getItem('username');
    try {
        const res = await axios.post(`http://localhost:8080/api/shopping/create/${username}/${idProduct}/${quantity}`
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
export const deleteShoppingcart = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8080/api/shopping/delete/${id}`
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


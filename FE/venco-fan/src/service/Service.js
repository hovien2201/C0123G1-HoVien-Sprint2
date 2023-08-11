import axios from "axios";
const token = localStorage.getItem('token');
export const getAllProduct = async (name,page) => {
    // const token = localStorage.getItem('token');
    try {
        const res = await axios.get(`http://localhost:8080/api/product?name=${name}&page=${page}`);
        return res;
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
   
        if(token != null){
            const res = await axios.get(`http://localhost:8080/api/shopping`
            ,
                {

                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                );
            return res.data;
        }else{
            const res = await axios.get(`http://localhost:8080/api/shopping`,{withCredentials:true})
            return res.data;
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
    const newValue ={
        quantity : quantity,
        products : idProduct
    }
    const id =idProduct.id;
    const username = localStorage.getItem('username');
    try {
        if(username){
const res = await axios.post(`http://localhost:8080/api/shopping/create/${username}/${id}/${quantity}`
        // ,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         }
        //     }
            );
        return res.data;
        }else{
            const res = await axios.post("http://localhost:8080/api/shopping", newValue,
                                                    {withCredentials: true})
            return res.data;
        }
        
    } catch (e) {
        console.log(e)
        return e
    }
}
export const deleteShoppingcart = async (id,idP) => {
    try {
        if(token != null){
            const res = await axios.delete(`http://localhost:8080/api/shopping/delete/${id}`
            // ,
            //     {
            //         headers: {
            //             Authorization: `Bearer ${token}`,
            //         }
            //     }
                );
            return res.data;
        }else{
            const res = await axios.delete(`http://localhost:8080/api/shopping/deleteSession/`+ idP, {withCredentials: true})
            return res.data;
        }
        
    } catch (e) {
        console.log(e)
        return e
    }
}


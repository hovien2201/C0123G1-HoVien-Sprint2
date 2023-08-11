import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React, { useEffect, useState } from "react";
import * as service from '../../service/Service';
import Swal from "sweetalert2";
export function ShoppingCart() {
    const [quantity, setQuantity] = useState(1)
    const [shoppingCart, setShoppingCart] = useState([])
    const [totalPriceAll, setTotalPriceAll] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const getCart = async () => {
        try {
            const result = await service.getShoppingcart()
        await setShoppingCart(result)
        setTotalQuantity(0)
        setTotalPriceAll(0)
        if(result != null){
            await result.map(async(val, index) => {            
                await setTotalQuantity(total => total+ val.quantity)
                await setTotalPriceAll(total => total +val.price)
        })
        }
        } catch (error) {
            
        }
        
        
    
    }
    const setTotalQ = async (q) => {
        await setTotalQuantity(q+totalQuantity)
    }
    const editQuantity = async (val, id, vQuantity) => {
        if (vQuantity > 1 || val == 1) {
            await service.setShoppingcart(val, id);
            getCart();
        }

    }
    const deleteShoppingCart = async (id,idP) => {
        await service.deleteShoppingcart(id,idP)
        Swal.fire({
            icon: "success",
            title: "Delete Cart success",
            timer: "3000"
        })
        getCart()
    }
    const deleteCart = async (id, name,idP) => {
        Swal.fire({
            icon: "warning",
            title: `Do you want to remove a product named <span class='al'> ${name} </span> from the cart?`,
            showCancelButton: true,
            confirmButtonText: "Oke"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    deleteShoppingCart(id,idP)
                }
            })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getCart()
    }, []);
    return (
        <>
            <div className="container" style={{ marginTop: "7%" }}>
                <div className="section-title" data-aos="fade-up">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-8">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th >Image</th>
                                    <th>Produts</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total price</th>
                                    <th>&ensp;</th>
                                </tr>
                            </thead>
                            <tbody>

                                {shoppingCart ? (shoppingCart.map((value, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img className="pic"
                                                src={value.products.image}
                                                alt="" />
                                        </td>
                                        <td>{value.products.name}</td>
                                        <td>$ {value.products.price}</td>
                                        <td>
                                            <div className="d-flex">
                                                <div className="d-flex">
                                                    <button type="button" className="minus" onClick={() => editQuantity(0, value.id, value.quantity)}><span>-</span></button>
                                                    <input value={value.quantity}
                                                        className="input" min="0" />
                                                    <button type="button" value="+" className="plus" onClick={() => editQuantity(1, value.id, value.quantity)}><span>+</span></button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$ {value.price}</td>
                                        <td>
                                            <a title="Delete"><i class="bi bi-x" style={{ fontSize: "200%" }} onClick={() => deleteCart(value.id, value.products.name,value.products.id)}></i></a>
                                        </td>
                                    </tr>
                                ))) : <>
                                <tr><p></p></tr>
                                <tr><p></p></tr>
                                <tr><p></p></tr>
                                <tr ><td></td><td></td><td></td><td>Shopping Cart no products</td><td></td></tr>
                                
                                </>
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div class="stack">
                            <div class="card">
                                <div class="image" >

                                    <h2 style={{ textAlign: "center", marginBottom: "10%", marginTop: "5%", color: "#6495ED" }}>Payment order</h2>
                                    <p style={{ marginLeft: "4%" }}>Quantity product:{totalQuantity} </p>
                                    <h5 style={{ marginLeft: "4%" }}>Total price all: $ {totalPriceAll}</h5>
                                    <div className="d-flex" style={{ marginTop: "20%" }}>
                                        <div className="full" style={{ marginRight: "15%", marginLeft: "25%" }} title="Back Home">
                                            <Link to='/'>
                                                <ArrowBackIcon style={{ fontSize: "200%" }} />
                                            </Link>
                                        </div>
                                        <div className="full">

                                            <Link to='/' title='Payment'>
                                                <CreditScoreIcon style={{ fontSize: "200%" }} />
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
export function ShoppingCart() {
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
                                <tr>
                                    <td>
                                        <img className="pic"
                                            src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                                            alt="" />
                                    </td>
                                    <td>Fan F1.2</td>
                                    <td >$ 200</td>
                                    <td>
                                        <div className="d-flex">
                                            <button type="button" className="minus"><span>-</span></button>
                                            <input type="number" id="quantity_64c88c2c676ec"
                                                className="input" step="1" min="0" max />
                                            <button type="button" value="+" className="plus"><span>+</span></button>
                                        </div>
                                    </td>
                                    <td>$ 200</td>
                                    <td>
                                        <a title="Delete"><i class="bi bi-x" style={{ fontSize: "200%" }}></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="pic"
                                            src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                                            alt="" />
                                    </td>
                                    <td>Fan wall E19.6</td>
                                    <td>$ 200</td>
                                    <td>
                                        <div className="d-flex">
                                            <button type="button" className="minus"><span>-</span></button>
                                            <input type="number" id="quantity_64c88c2c676ec"
                                                className="input" step="1" min="0" max
                                                name="cart[9c994526d37b56cd609f904822ffbe53][qty]" value="1"
                                                title="SL" size="4" placeholder inputMode="numeric"
                                                fdprocessedid="pr6xgp" />
                                            <button type="button" value="+" className="plus"><span>+</span></button>
                                        </div>
                                    </td>
                                    <td>$ 200</td>
                                    <td>
                                        <a title="Delete"><i class="bi bi-x" style={{ fontSize: "200%" }}></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div class="stack">
                            <div class="card">
                                <div class="image" >
                                    <h2 style={{ textAlign: "center", marginBottom: "10%",color:"#61dafb" }}>Payment order</h2>
                                    <p>Quantity product: 2</p>
                                    <h5>Total price all: $ 400</h5>
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
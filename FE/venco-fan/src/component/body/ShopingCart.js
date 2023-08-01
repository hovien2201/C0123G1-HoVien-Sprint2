export function ShopingCart() {
    return (
        <>
        <div className="container" style={{marginTop:"5%"}}>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tạm tính</th>
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
                        <td>Nho Rượu Hàn Quốc</td>
                        <td>200.000 đ</td>
                        <td>
                            <div className="d-flex">
                                <button type="button" className="minus"><span>-</span></button>
                                <input type="number" id="quantity_64c88c2c676ec"
                                    className="input" step="1" min="0" max />
                                <button type="button" value="+" className="plus"><span>+</span></button>
                            </div>
                        </td>
                        <td>200.000 đ</td>
                        <td>
                            <div className="btn" data-bs-dismiss="alert">
                                <span className="fas fa-times"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className="pic"
                                src="https://tcorder.vn/wp-content/uploads/2021/05/quat-mini-cam-tay-ban-nhieu-tren-shopee-3.jpg"
                                alt="" />
                        </td>
                        <td>Nho Rượu Hàn Quốc</td>
                        <td>200.000 đ</td>
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
                        <td>200.000 đ</td>
                        <td>
                            <div className="btn" data-bs-dismiss="alert">
                                <span className="fas fa-times"></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}
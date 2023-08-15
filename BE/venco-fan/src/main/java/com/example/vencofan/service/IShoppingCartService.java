package com.example.vencofan.service;
import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Products;
import com.example.vencofan.model.ShoppingCart;

import java.util.List;

public interface IShoppingCartService {
    List<ShoppingCart> getAllByCus(Integer id);

    void setCart(Integer index, Integer id);
    void createCart(Customers customers, Products products, Integer quantity);

    void deleteById(Integer id);

    void deleteByCus(Customers customers);
}

package com.example.vencofan.service;

import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Products;
import com.example.vencofan.model.ShoppingCart;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IBillDetailService {
    ResponseEntity<?> createOrder(List<ShoppingCart> shoppingCarts, Customers customers);
}

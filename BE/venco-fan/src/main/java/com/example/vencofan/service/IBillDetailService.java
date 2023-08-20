package com.example.vencofan.service;

import com.example.vencofan.model.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IBillDetailService {
    ResponseEntity<?> createOrder(List<ShoppingCart> shoppingCarts, Customers customers);

    List<Bills> getHistory(Integer id);

    List<BillDetail> getHistoryD(Integer id);
}

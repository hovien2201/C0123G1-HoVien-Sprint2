package com.example.vencofan.controller;

import com.example.vencofan.config.JwtUserDetails;
import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Products;
import com.example.vencofan.model.ShoppingCart;
import com.example.vencofan.service.IBillDetailService;
import com.example.vencofan.service.ICustomerService;
import com.example.vencofan.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/order")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
public class OrderController {
    @Autowired
    private IBillDetailService iBillDetailService;
    @Autowired
    private IShoppingCartService iShoppingCartService;
    @Autowired
    private ICustomerService iCustomerService;
    @PostMapping("")
    public ResponseEntity<?> createOrder() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
        Customers customers = iCustomerService.getCus(principal.getUsername());
        List<ShoppingCart> shoppingCarts =iShoppingCartService.getAllByCus(customers.getId());
        try {
            ResponseEntity<?> re=iBillDetailService.createOrder(shoppingCarts,customers);
            if (re.getStatusCode()==HttpStatus.OK){
                iShoppingCartService.deleteByCus(customers);
            }
            return re;
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

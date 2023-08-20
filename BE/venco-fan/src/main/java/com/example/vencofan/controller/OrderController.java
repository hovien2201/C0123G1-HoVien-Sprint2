package com.example.vencofan.controller;

import com.example.vencofan.config.JwtUserDetails;
import com.example.vencofan.model.*;
import com.example.vencofan.service.IBillDetailService;
import com.example.vencofan.service.ICustomerService;
import com.example.vencofan.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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
    @GetMapping("")
    public ResponseEntity<List<Bills>> getHistory() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Customers customers = iCustomerService.getCus(principal.getUsername());
            List<Bills> list =iBillDetailService.getHistory(customers.getId());
            return new ResponseEntity<>(list,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


    }
    @GetMapping("/detail")
    public ResponseEntity<List<BillDetail>> getHistoryDetail(@RequestParam("id") Integer id) {
        try {
            List<BillDetail> list =iBillDetailService.getHistoryD(id);
            if (list.size()==0){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(list,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

package com.example.vencofan.controller;

import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Products;
import com.example.vencofan.model.ShoppingCart;
import com.example.vencofan.service.ICustomerService;
import com.example.vencofan.service.IProductService;
import com.example.vencofan.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/shopping")
@RestController
@CrossOrigin("*")
public class ShoppingCartController {
    @Autowired
    private IShoppingCartService iShoppingCartService;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IProductService productService;
    @GetMapping("/{username}")
    public ResponseEntity<List<ShoppingCart>> getCart(@PathVariable String username){
        Customers customers =iCustomerService.getCus(username);
        try{
            return new ResponseEntity<>(iShoppingCartService.getAllByCus(customers.getId()), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PatchMapping("/{index}/{id}")
    public ResponseEntity<?> setCart(@PathVariable Integer index,@PathVariable Integer id){
        try{
            iShoppingCartService.setCart(index,id);
            return new ResponseEntity<>( HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/create/{username}/{id}/{quantity}")
    public ResponseEntity<?> createCart(@PathVariable String username,@PathVariable Integer id,@PathVariable Integer quantity){
        try{
            Products products =productService.getProduct(id);
            Customers customers =iCustomerService.getCus(username);
            iShoppingCartService.createCart(customers,products,quantity);
            return new ResponseEntity<>( HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable Integer id){

        try{
            iShoppingCartService.deleteById(id);
            return new ResponseEntity<>( HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

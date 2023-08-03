package com.example.vencofan.controller;

import com.example.vencofan.model.Products;
import com.example.vencofan.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/product")
@RestController
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @GetMapping("")
    public ResponseEntity<List<Products>> getProduct(){
        try{
            return new ResponseEntity<>(iProductService.getAll(),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Products> getDetailProduct(@PathVariable("id") Integer id){
        try{
            return new ResponseEntity<>(iProductService.getProduct(id),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package com.example.vencofan.service;

import com.example.vencofan.model.Products;

import java.util.List;

public interface IProductService {
    List<Products> getAll();

    Products getProduct(Integer id);
}

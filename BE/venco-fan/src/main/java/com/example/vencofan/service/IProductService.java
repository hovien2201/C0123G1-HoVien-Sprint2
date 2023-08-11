package com.example.vencofan.service;

import com.example.vencofan.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Products> getAll(String name, Pageable pageable);

    Products getProduct(Integer id);
}

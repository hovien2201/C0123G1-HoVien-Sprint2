package com.example.vencofan.service;

import com.example.vencofan.model.Products;
import com.example.vencofan.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public List<Products> getAll() {
        return iProductRepository.getAll();
    }

    @Override
    public Products getProduct(Integer id) {
        return iProductRepository.findById(id).get();
    }
}

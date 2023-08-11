package com.example.vencofan.service;

import com.example.vencofan.model.Products;
import com.example.vencofan.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public Page<Products> getAll(String name, Pageable pageable) {
        if (name.equals("null")){
            return iProductRepository.getAll("",pageable);

        }else {
            return iProductRepository.getAll(name,pageable);
        }
    }

    @Override
    public Products getProduct(Integer id) {
        return iProductRepository.findById(id).get();
    }
}

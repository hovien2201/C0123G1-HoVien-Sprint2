package com.example.vencofan.repository;

import com.example.vencofan.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Products,Integer> {
}

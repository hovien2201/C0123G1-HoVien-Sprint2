package com.example.vencofan.repository;

import com.example.vencofan.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Products,Integer> {
    @Query(value = "select * from products where is_delete =false",nativeQuery = true)
    List<Products> getAll();
}

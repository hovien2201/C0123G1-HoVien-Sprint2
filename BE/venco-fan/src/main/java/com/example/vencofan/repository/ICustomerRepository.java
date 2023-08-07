package com.example.vencofan.repository;

import com.example.vencofan.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customers,Integer> {
    Customers findByUsers_Username(String username);
}

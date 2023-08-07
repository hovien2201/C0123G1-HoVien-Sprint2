package com.example.vencofan.service;

import com.example.vencofan.model.Customers;
import com.example.vencofan.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Customers getCus(String u) {
        return iCustomerRepository.findByUsers_Username(u);
    }
}

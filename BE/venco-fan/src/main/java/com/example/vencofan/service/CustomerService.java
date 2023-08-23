package com.example.vencofan.service;

import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Roles;
import com.example.vencofan.model.Users;
import com.example.vencofan.repository.ICustomerRepository;
import com.example.vencofan.repository.IRoleRepository;
import com.example.vencofan.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private IRoleRepository iRoleRepository;
    @Override
    public Customers getCus(String u) {
        return iCustomerRepository.findByUsers_Username(u);
    }

    @Override
    public void createCustomer(Customers customers) {
        Roles roles =iRoleRepository.findById(2).get();
        Users users =new Users();
        users.setRoles(roles);
        String password = passwordEncoder.encode(customers.getUsers().getPassword());
        users.setPassword(password);
        users.setEmail(customers.getEmail());
        users.setUsername(customers.getUsers().getUsername());
        iUserRepository.save(users);
        customers.setUsers(users);
        iCustomerRepository.save(customers);
    }
}

package com.example.vencofan.service;


import com.example.vencofan.model.Users;

public interface IUsersService {
    Users findByUsername(String username);
    Users findByEmail(String email);
    void editUser(Users users);

    Users findById(Integer id);
    void saveNewPassword(Users users);
}

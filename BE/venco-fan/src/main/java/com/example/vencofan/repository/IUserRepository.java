package com.example.vencofan.repository;

import com.example.vencofan.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUserRepository extends JpaRepository<Users,Integer> {
    Users findByUsername(String username);
    Users findByEmail(String email);

    @Modifying
    @Query(value = "UPDATE users SET password = :password WHERE id = :id", nativeQuery = true)
    void saveNewPassword(@Param("id") Integer id, @Param("password") String password);

}

package com.example.vencofan.repository;

import com.example.vencofan.model.Bills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBiilRepository extends JpaRepository<Bills ,Integer> {
}

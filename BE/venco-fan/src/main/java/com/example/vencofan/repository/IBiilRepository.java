package com.example.vencofan.repository;

import com.example.vencofan.model.Bills;
import jdk.internal.dynalink.linker.LinkerServices;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBiilRepository extends JpaRepository<Bills ,Integer> {
    List<Bills> findAllByCustomers_IdOrderByCreateDateDesc(Integer id);
}

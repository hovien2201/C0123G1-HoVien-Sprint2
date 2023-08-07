package com.example.vencofan.repository;

import com.example.vencofan.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IImageRepository extends JpaRepository<Images,Integer> {
    List<Images> findAllByProducts_Id(Integer id);
}

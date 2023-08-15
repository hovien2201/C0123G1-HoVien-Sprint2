package com.example.vencofan.repository;

import com.example.vencofan.model.BillDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBillDetailRepository extends JpaRepository<BillDetail,Integer> {
}

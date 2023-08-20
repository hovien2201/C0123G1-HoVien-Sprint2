package com.example.vencofan.repository;

import com.example.vencofan.model.BillDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBillDetailRepository extends JpaRepository<BillDetail,Integer> {
    List<BillDetail> findAllByBills_Id(Integer id);
}

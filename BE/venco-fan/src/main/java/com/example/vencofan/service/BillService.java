package com.example.vencofan.service;

import com.example.vencofan.repository.IBiilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillService implements IBiilService{
    @Autowired
    private IBiilRepository iBiilRepository;

}

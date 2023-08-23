package com.example.vencofan.service;

import com.example.vencofan.model.*;
import com.example.vencofan.repository.IBiilRepository;
import com.example.vencofan.repository.IBillDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Random;

@Service
public class BillDetailService implements IBillDetailService{
    @Autowired
    private IBillDetailRepository iBillDetailRepository;
    @Autowired
    private IBiilRepository iBiilRepository;

    @Transactional
    @Override
    public ResponseEntity<?> createOrder(List<ShoppingCart> shoppingCarts, Customers customers) {
        boolean check =false;
        for (int i = 0; i < shoppingCarts.size(); i++) {
            if(shoppingCarts.get(i).getQuantity() > shoppingCarts.get(i).getProducts().getQuantity()){
                check= true;
            }
        }
        if (check ==true){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    "The number of products is not enough ! Please reduce the corresponding purchase amount !");
        }else {
            Bills bills = new Bills();
            bills.setCustomers(customers);
            bills.setTotalPrice(0.0);
            iBiilRepository.save(bills);
            Double price =0.0;
            for (int i = 0; i < shoppingCarts.size(); i++) {
                BillDetail billDetail =new BillDetail();
                billDetail.setBills(bills);
                billDetail.setProducts(shoppingCarts.get(i).getProducts());
                billDetail.setQuantity(shoppingCarts.get(i).getQuantity());
                billDetail.setPrice(shoppingCarts.get(i).getPrice());
                billDetail.getProducts().setQuantity(billDetail.getProducts().getQuantity() - billDetail.getQuantity());
                iBillDetailRepository.save(billDetail);
                price += shoppingCarts.get(i).getPrice();
            }
            List<Bills> list=iBiilRepository.findAll();
            long code;
            Random random = new Random();
            long min = 10000; // Số nhỏ nhất có 5 chữ số
            long max = 99999; // Số lớn nhất có 5 chữ số
            boolean flag;
            String orderCode;
            do {
                flag = true;
                code = random.nextLong() % (max - min + 1) + min;
                orderCode = "OD-" + code;
                for (int i = 0; i < list.size(); i++) {
                    if (Objects.equals(list.get(i).getCode(), orderCode)) {
                        flag = false;
                    }
                }
            } while (!flag);
            bills.setCode(orderCode);
            bills.setTotalPrice(price);
            iBiilRepository.save(bills);
            return new ResponseEntity<>(HttpStatus.OK);
        }

    }

    @Override
    public List<Bills> getHistory(Integer id) {
        return iBiilRepository.findAllByCustomers_IdOrderByCreateDateDesc(id);
    }

    @Override
    public List<BillDetail> getHistoryD(Integer id) {
        return iBillDetailRepository.findAllByBills_Id(id);
    }
}

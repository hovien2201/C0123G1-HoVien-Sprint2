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

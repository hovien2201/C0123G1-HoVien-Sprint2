package com.example.vencofan.model;

import javax.persistence.*;

@Entity
@Table(name = "bill_detail")
public class BillDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    private Double price;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products products;
    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Bills bills;

    public BillDetail() {
    }

    public BillDetail(Integer id, Integer quantity, Double price, Products products, Bills bills) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.products = products;
        this.bills = bills;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Bills getBills() {
        return bills;
    }

    public void setBills(Bills bills) {
        this.bills = bills;
    }

}

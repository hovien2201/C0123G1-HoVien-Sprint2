package com.example.vencofan.model;

import javax.persistence.*;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    private Integer quantity;
    private Double price;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products products;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customers;

    public ShoppingCart() {
    }

    public ShoppingCart(Integer id, Integer quantity, Double price, Products products, Customers customers) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.products = products;
        this.customers = customers;
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

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }
}

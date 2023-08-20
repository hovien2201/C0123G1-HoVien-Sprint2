package com.example.vencofan.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "bills")
public class Bills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @CreationTimestamp
    @Column(name = "create_date", columnDefinition = "TIMESTAMP DEFAULT now()", updatable = false)
    private LocalDateTime createDate;
    @Column(columnDefinition = "BIT DEFAULT 0")
    private boolean isDelete;
    @Column(name = "total_price")
    private Double totalPrice;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customers;

    public Bills() {
    }

    public Bills(Double totalPrice, Customers customers) {
        this.totalPrice = totalPrice;
        this.customers = customers;
    }

    public Bills(Integer id, LocalDateTime createDate, boolean isDelete, Double totalPrice, Customers customers) {
        this.id = id;
        this.createDate = createDate;
        this.isDelete = isDelete;
        this.totalPrice = totalPrice;
        this.customers = customers;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }

}

package com.example.vencofan.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
@Entity
@Table(name = "reviews")
public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer rating;
    private String comments;
    @Column(columnDefinition = "DATETIME DEFAULT now()")
    @CreationTimestamp
    private LocalDateTime createDate;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customers;

    public Reviews() {
    }

    public Reviews(Integer id, Integer rating, String comments, LocalDateTime createDate, Customers customers) {
        this.id = id;
        this.rating = rating;
        this.comments = comments;
        this.createDate = createDate;
        this.customers = customers;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public Customers getCustomers() {
        return customers;
    }

    public void setCustomers(Customers customers) {
        this.customers = customers;
    }
}

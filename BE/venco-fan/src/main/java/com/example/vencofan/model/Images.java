package com.example.vencofan.model;

import javax.persistence.*;

@Entity
@Table(name = "img_product")
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "img", nullable = false, unique = true)
    private String img;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products products;

    public Images() {
    }

    public Images(Integer id, String img, Products products) {
        this.id = id;
        this.img = img;
        this.products = products;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}

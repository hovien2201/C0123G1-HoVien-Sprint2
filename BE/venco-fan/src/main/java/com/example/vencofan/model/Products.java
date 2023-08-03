package com.example.vencofan.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "product_name", nullable = false)
    private String name;
    @Column(name = "price", nullable = false)
    private Double price;
    @Column(name = "quantity", nullable = false)
    private Integer quantity;
    @Column(name = "isDelete", nullable = false)
    private boolean isDelete;
    @Column(columnDefinition = "DATETIME DEFAULT now()")
    @CreationTimestamp
    private LocalDateTime createDate;
    @Column(columnDefinition = "DATETIME DEFAULT now()")
    @UpdateTimestamp
    private LocalDateTime updateDate;
    @Column(name = "descrip",length = 1000)
    private String description;
    @ManyToOne
    @JoinColumn(name = "type_product")
    private TypeProduct typeProduct;

    private String image;

    public Products() {
    }

    public Products(Integer id, String name, Double price, Integer quantity, boolean isDelete, LocalDateTime createDate, LocalDateTime updateDate, String description, TypeProduct typeProduct, String image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.isDelete = isDelete;
        this.createDate = createDate;
        this.updateDate = updateDate;
        this.description = description;
        this.typeProduct = typeProduct;
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }


}

package com.example.vencofan.repository;

import com.example.vencofan.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface IProductRepository extends JpaRepository<Products,Integer> {
    @Query(value = "select p.id,p.product_name,p.price,p.quantity,p.descrip ,p.image ,p.type_product,p.create_date,p.update_date,p.is_delete from products as p inner join type_product as t on t.id = p.type_product where t.name like concat('%',:name,'%') and  p.is_delete =false",nativeQuery = true)
    Page<Products> getAll(@Param("name") String name, Pageable pageable);
}

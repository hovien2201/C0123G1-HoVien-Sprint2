package com.example.vencofan.repository;

import com.example.vencofan.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IShoppingCartRepository extends JpaRepository<ShoppingCart,Integer> {

    List<ShoppingCart> findAllByCustomers_Id(Integer id);
    @Query(value = "select * from shopping_cart where product_id = :idProduct and customer_id = :idCustomer",nativeQuery = true)
    ShoppingCart getCartToCreate(Integer idProduct,Integer idCustomer );
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM shopping_cart WHERE customer_id = :id", nativeQuery = true)
    void deleteByCus(@Param("id") Integer id);
}

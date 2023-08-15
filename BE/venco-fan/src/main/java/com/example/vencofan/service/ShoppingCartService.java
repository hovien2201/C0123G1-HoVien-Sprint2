package com.example.vencofan.service;

import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Products;
import com.example.vencofan.model.ShoppingCart;
import com.example.vencofan.repository.IShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ShoppingCartService implements IShoppingCartService{
    @Autowired
    private IShoppingCartRepository iShoppingCartRepository;

    @Override
    public List<ShoppingCart> getAllByCus(Integer id) {
        return iShoppingCartRepository.findAllByCustomers_Id(id);
    }

    @Override
    public void setCart(Integer index, Integer id) {
        ShoppingCart shoppingCart=iShoppingCartRepository.findById(id).get();
        if (index==0){
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice()*(shoppingCart.getQuantity()-1));
            shoppingCart.setQuantity(shoppingCart.getQuantity()-1);
            iShoppingCartRepository.save(shoppingCart);
        }else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice()*(shoppingCart.getQuantity()+1));
            shoppingCart.setQuantity(shoppingCart.getQuantity()+1);
            iShoppingCartRepository.save(shoppingCart);
        }
    }

    @Override
    public void createCart(Customers customers, Products products, Integer quantity) {
        ShoppingCart shoppingCart = iShoppingCartRepository.getCartToCreate(products.getId(), customers.getId());
        if (shoppingCart==null){
            ShoppingCart newShoppingCart= new ShoppingCart();
            newShoppingCart.setPrice(products.getPrice()*quantity);
            newShoppingCart.setQuantity(quantity);
            newShoppingCart.setCustomers(customers);
            newShoppingCart.setProducts(products);
            iShoppingCartRepository.save(newShoppingCart);
        }else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice()*(shoppingCart.getQuantity()+quantity));
            shoppingCart.setQuantity(shoppingCart.getQuantity()+quantity);
            iShoppingCartRepository.save(shoppingCart);
        }
    }

    @Override
    public void deleteById(Integer id) {
        iShoppingCartRepository.deleteById(id);
    }

    @Override
    public void deleteByCus(Customers customers) {
        iShoppingCartRepository.deleteByCus(customers.getId());
    }
}

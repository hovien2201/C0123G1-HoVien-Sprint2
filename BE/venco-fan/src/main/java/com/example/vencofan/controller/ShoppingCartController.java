package com.example.vencofan.controller;

import com.example.vencofan.config.JwtUserDetails;
import com.example.vencofan.model.Customers;
import com.example.vencofan.model.Products;
import com.example.vencofan.model.ShoppingCart;
import com.example.vencofan.service.ICustomerService;
import com.example.vencofan.service.IProductService;
import com.example.vencofan.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@RequestMapping("/api/shopping")
@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
public class ShoppingCartController {
    @Autowired
    private IShoppingCartService iShoppingCartService;
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<List<ShoppingCart>> getCart(HttpServletRequest httpServletRequest) {
        HttpSession session = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                List<ShoppingCart> list = (List<ShoppingCart>) session.getAttribute("cart");
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Customers customers = iCustomerService.getCus(principal.getUsername());
            return new ResponseEntity<>(iShoppingCartService.getAllByCus(customers.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> saveCartSession(@RequestBody ShoppingCart shoppingCart, HttpServletRequest httpServletRequest) {
        List<ShoppingCart> shoppingCartList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        if (session.getAttribute("cart") != null) {
            shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
            int count = 0;
            for (int i = 0; i < shoppingCartList.size(); i++) {
                if (shoppingCart.getProducts().getId() == shoppingCartList.get(i).getProducts().getId()) {
                    shoppingCartList.get(i).setPrice((shoppingCartList.get(i).getQuantity() + shoppingCart.getQuantity())*shoppingCartList.get(i).getProducts().getPrice());
                    shoppingCartList.get(i).setQuantity(shoppingCartList.get(i).getQuantity() + shoppingCart.getQuantity());
                    count++;
                }
            }
            if (count == 0) {
                shoppingCart.setPrice(shoppingCart.getProducts().getPrice()*shoppingCart.getQuantity());
                shoppingCartList.add(shoppingCart);
            }
        } else {
            shoppingCart.setPrice(shoppingCart.getProducts().getPrice()*shoppingCart.getQuantity());
            shoppingCartList.add(shoppingCart);
            session.setAttribute("cart", shoppingCartList);

        }
        session.setAttribute("cart", shoppingCartList);
        return new ResponseEntity<>(session.getAttribute("cart"), HttpStatus.OK);
    }

    @PostMapping("/{index}/{id}")
    public ResponseEntity<?> setCart(@PathVariable Integer index, @PathVariable Integer id,HttpServletRequest httpServletRequest) {
        List<ShoppingCart> shoppingCartList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication.getPrincipal().equals("anonymousUser")) {
                shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
                if (shoppingCartList != null){
                    for (int i = 0; i < shoppingCartList.size(); i++) {
                        if (shoppingCartList.get(i).getProducts().getId() == id){
                            if (index==0){
                                shoppingCartList.get(i).setPrice(shoppingCartList.get(i).getProducts().getPrice()*(shoppingCartList.get(i).getQuantity()-1));
                                shoppingCartList.get(i).setQuantity(shoppingCartList.get(i).getQuantity()-1);
                            }else {
                                shoppingCartList.get(i).setPrice(shoppingCartList.get(i).getProducts().getPrice()*(shoppingCartList.get(i).getQuantity()+1));
                                shoppingCartList.get(i).setQuantity(shoppingCartList.get(i).getQuantity()+1);
                            }
                        }
                    }
                }
                session.setAttribute("cart", shoppingCartList);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            iShoppingCartService.setCart(index, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")
    @PostMapping("/create/{id}/{quantity}")
    public ResponseEntity<?> createCart( @PathVariable Integer id, @PathVariable Integer quantity) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Products products = productService.getProduct(id);
            Customers customers = iCustomerService.getCus(principal.getUsername());
            iShoppingCartService.createCart(customers, products, quantity);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable Integer id) {
        try {
            iShoppingCartService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/deleteSession/{id}")
    public ResponseEntity<?> deleteCartToSession(@PathVariable Integer id,HttpServletRequest httpServletRequest) {
        List<ShoppingCart> shoppingCartList = new ArrayList<>();
        HttpSession session = httpServletRequest.getSession();
        if (session.getAttribute("cart") != null) {
            shoppingCartList = (List<ShoppingCart>) session.getAttribute("cart");
            for (int i = 0; i < shoppingCartList.size(); i++) {
                if (id == shoppingCartList.get(i).getProducts().getId()) {
                   shoppingCartList.remove(i);
                }
            }
            session.setAttribute("cart", shoppingCartList);
            return new  ResponseEntity<>(HttpStatus.OK);
        }
        return new  ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

}

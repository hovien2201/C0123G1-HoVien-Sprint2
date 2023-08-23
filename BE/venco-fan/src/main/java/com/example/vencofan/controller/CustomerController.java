package com.example.vencofan.controller;

import com.example.vencofan.config.JwtUserDetails;
import com.example.vencofan.model.Customers;
import com.example.vencofan.service.EmailService;
import com.example.vencofan.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api/customer")
@RestController
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private EmailService emailService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CUSTOMER')")
    @GetMapping("")
    public ResponseEntity<Customers> getCustomer() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            Customers customers = iCustomerService.getCus(principal.getUsername());
            return new ResponseEntity<>(customers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/newCustomer")
    public ResponseEntity<Customers> createCustomer(@RequestBody Customers customers) {
        try {
            iCustomerService.createCustomer(customers);
            emailService.sendMail(customers.getEmail(), "Successful account registration", "Thank you for taking the time to visit our store. You have just been confirmed as a member of the store." +
                    "\n" +
                    "Thanks and wish you a happy shopping." +
                    "\n" +
                    "\n" +
                    "---------------------------------------" + "\n" +
                    "Name :Venco Fan\n" +
                    "Mobile : 0782391943\n" +
                    "Email : vencofan@gmail.com\n" +
                    "Address :\u200B2\u200B80\u200B \u200BTrần Hưng Đạo\u200B streets, \u200BSơn Trà\u200B District, Da Nang");
            return new ResponseEntity<>(customers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

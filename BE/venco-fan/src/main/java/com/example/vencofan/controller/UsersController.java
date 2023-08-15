package com.example.vencofan.controller;

import com.example.vencofan.config.JwtTokenUtil;
import com.example.vencofan.config.JwtUserDetails;
import com.example.vencofan.model.Customers;
import com.example.vencofan.model.ShoppingCart;
import com.example.vencofan.model.Users;
import com.example.vencofan.reponse.JwtRequest;
import com.example.vencofan.reponse.JwtResponse;
import com.example.vencofan.service.EmailService;
import com.example.vencofan.service.ICustomerService;
import com.example.vencofan.service.IShoppingCartService;
import com.example.vencofan.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.CustomAutowireConfigurer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Random;

/**
 * Created by: VienH
 * Date created: 13/07/2023
 * Function: Login , Forgot Password
 *
 * @param
 * @return
 */
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/api/user")
public class UsersController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UsersService usersService;
    @Autowired
    private EmailService emailService;
    @Autowired
    private IShoppingCartService iShoppingCartService;
    @Autowired
    private ICustomerService iCustomerService;

    class ErrorInfo {
        private String error;
        private Long id;


    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> loginAuthentication(@RequestBody JwtRequest authenticationRequest, HttpServletRequest httpServletRequest) throws Exception {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            JwtUserDetails principal = (JwtUserDetails) authentication.getPrincipal();
            GrantedAuthority authority = principal.getAuthorities().stream().findFirst().orElse(null);
            final String token = jwtTokenUtil.generateToken(principal.getUsername());
            HttpSession session = httpServletRequest.getSession();
            if (session.getAttribute("cart") != null) {
                List<ShoppingCart> list = (List<ShoppingCart>) session.getAttribute("cart");
                Customers customers = iCustomerService.getCus(principal.getUsername());
                try {
                    iShoppingCartService.deleteByCus(customers);
                } catch (Exception e) {
                    throw e;
                }
                for (int i = 0; i < list.size(); i++) {
                    iShoppingCartService.createCart(customers, list.get(i).getProducts(), list.get(i).getQuantity());
                }
                session.removeAttribute("cart");
            }

            return ResponseEntity.ok(new JwtResponse(token, principal.getUsername(), authority != null ? authority.getAuthority() : null));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Login fail!!");
        }
    }

    @PostMapping("/checkEmail")
    public ResponseEntity<?> checkMail(@RequestBody Users user) {
        Users users = usersService.findByEmail(user.getEmail());
        if (users != null) {
            Random random = new Random();
            int randomNumber = random.nextInt(900000) + 100000;
            users.setVerificationCode(randomNumber);
            try {
                usersService.editUser(users);
                emailService.sendMail(users.getEmail(), "Mã xác nhận email", "Chào bạn,Mã xác thực email trong quy trình lấy lại mật khẩu của bạn:" + randomNumber +
                        "\n" +
                        "\n" +
                        "\n" +
                        "\n" +
                        "---------------------------------------" + "\n" +
                        "Name :Venco Fan\n" +
                        "Mobile : 0782391943\n" +
                        "Email : vencofan@gmail.com\n" +
                        "Address :\u200B2\u200B80\u200B \u200BTrần Hưng Đạo\u200B streets, \u200BSơn Trà\u200B District, Da Nang");
            } catch (Exception e) {

            }
            return ResponseEntity.ok(users.getId());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email không đúng!!");
        }
    }

    @PostMapping("/checkCode")
    public ResponseEntity<?> checkCode(@RequestBody Users user) {
        Users users = usersService.findById(user.getId());
        if (users.getVerificationCode().toString().equals(user.getVerificationCode().toString())) {
            return ResponseEntity.ok(users.getId());
        } else {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Xác nhận mã thất bại!!");
        }
    }

    @PatchMapping("/newPassword")
    public ResponseEntity<?> createNewPassword(@RequestBody Users user) {
        if (user.getPassword().length() < 8 || user.getPassword().length() > 20) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Mật khẩu không được ít hơn 8 hoăc nhiều hơn 50 kí tự!!");
        }
        try {
            usersService.saveNewPassword(user);
            return ResponseEntity.ok("Đổi mật khẩu thành công!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Đổi mật khẩu thất bại!!");
        }
    }
}
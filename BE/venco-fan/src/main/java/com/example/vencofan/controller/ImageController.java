package com.example.vencofan.controller;

import com.example.vencofan.model.Images;
import com.example.vencofan.service.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/image")
@RestController
@CrossOrigin("*")
public class ImageController {
    @Autowired
    private IImageService iImageService;
    @GetMapping("/{id}")
    public ResponseEntity<List<Images>> getDetailProduct(@PathVariable("id") Integer id){
        try{
            return new ResponseEntity<>(iImageService.getImage(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

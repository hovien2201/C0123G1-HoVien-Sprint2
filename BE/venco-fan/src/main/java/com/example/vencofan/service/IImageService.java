package com.example.vencofan.service;

import com.example.vencofan.model.Images;

import java.util.List;

public interface IImageService {
    List<Images> getImage(Integer id);
}

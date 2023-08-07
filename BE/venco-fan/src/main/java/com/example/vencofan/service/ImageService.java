package com.example.vencofan.service;

import com.example.vencofan.model.Images;
import com.example.vencofan.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService implements IImageService{
    @Autowired
    private IImageRepository iImageRepository;
    @Override
    public List<Images> getImage(Integer id) {

        return iImageRepository.findAllByProducts_Id(id);
    }
}

package com.example.adoptekspring.dto;

import com.example.adoptekspring.domain.enm.Gender;
import com.example.adoptekspring.domain.enm.PetCategory;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@Builder
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PetDto {
    private String name;
    @Enumerated(EnumType.STRING)
    private PetCategory petCategory;
    private String description;
    private float age;
    private String breed;
    private float height;
    private float weight;
    private Gender gender;
    private String GoodWith;
    private MultipartFile image;
    private String location;
    private String health;
    private String aggressionLevel;
    private String color;
    private String ownerPhoneNumber;

}

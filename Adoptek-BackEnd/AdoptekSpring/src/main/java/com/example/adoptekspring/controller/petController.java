package com.example.adoptekspring.controller;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.dto.PetDto;
import com.example.adoptekspring.service.PetService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
public class petController {

    private final PetService petService;

    @PostMapping("/addPet")
    public ResponseEntity<PetDto> addPet(@NotNull PetDto petDto) throws IOException {

//        get the abosoulot path of the image and move it to the static folder petDto.getImage()
        MultipartFile multipartFile = petDto.getImage();
        String targetDirectory = "C:\\Users\\Youcode\\Documents\\Projects\\Adoptek\\Adoptek-FrontEnd\\src\\assets\\images";

        File imageFile = new File(targetDirectory, multipartFile.getOriginalFilename());
        multipartFile.transferTo(imageFile);

        Path targetPath = Paths.get(targetDirectory, imageFile.getName());

        Files.move(imageFile.toPath(), targetPath, StandardCopyOption.REPLACE_EXISTING);

        String imageName = imageFile.getName();



        Pet pet = Pet.builder()
                .name(petDto.getName())
                .petCategory(petDto.getPetCategory())
                .description(petDto.getDescription())
                .age(petDto.getAge())
                .breed(petDto.getBreed())
                .height(petDto.getHeight())
                .weight(petDto.getWeight())
                .gender(petDto.getGender())
                .GoodWith(petDto.getGoodWith())
                .image(imageName)
                .location(petDto.getLocation())
                .health(petDto.getHealth())
                .aggressionLevel(petDto.getAggressionLevel())
                .color(petDto.getColor())
                .build();
        petService.createPet(pet);
        return ResponseEntity.ok(petDto);
    }

}

package com.example.adoptekspring.controller;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.dto.PetDto;
import com.example.adoptekspring.service.PetService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
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

    @GetMapping("/getAllPets")
    public ResponseEntity<List<Pet>> getAllPets() {
        return ResponseEntity.ok(petService.getAllPets());
    }

    @PostMapping("/addPet")
    public ResponseEntity<PetDto> addPet(@NotNull PetDto petDto)   {
        try {

//        get the abosoulot path of the image and move it to the static folder petDto.getImage()
        MultipartFile multipartFile = petDto.getImage();
        String targetDirectory = "C:\\Users\\Youcode\\Documents\\Projects\\Adoptek\\Adoptek-FrontEnd\\src\\assets\\images";

        File imageFile = new File(targetDirectory, Objects.requireNonNull(multipartFile.getOriginalFilename()));


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
        } catch (IOException e) {

        }
        return ResponseEntity.ok(petDto);
    }


    @GetMapping("/getPetsByCategory")
    public ResponseEntity<List<Pet>> getAllPetsByCategory(@NonNull @RequestParam String category) {
        return ResponseEntity.ok(petService.getAllPetsByCategory(category));
    }

    @GetMapping("/getPetsByOwner")
    public ResponseEntity<List<Pet>> getAllPetsByOwner() {
        return ResponseEntity.ok(petService.getAllPetsByOwner());
    }


}

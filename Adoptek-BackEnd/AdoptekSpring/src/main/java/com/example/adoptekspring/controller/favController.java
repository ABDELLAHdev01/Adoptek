package com.example.adoptekspring.controller;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.domain.favPet;
import com.example.adoptekspring.service.FavPetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
public class favController {
    private final FavPetService favPetService;



    @GetMapping("/getFavPets")
    public ResponseEntity<List<Pet>> getFavPets() {
        return ResponseEntity.ok(favPetService.getFavPets().getUserFavoritePets());
    }

    @GetMapping("/addPetToFav/{petId}")
    public ResponseEntity<String> addPetToFav(@PathVariable Long petId) {
        try {
            favPetService.addPetToFav(petId);
            return ResponseEntity.ok("Pet added to your favorite list successfully");

        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/removePetFromFav/{petId}")
    public ResponseEntity<String> removePetFromFav(@PathVariable Long petId) {
        try {
            favPetService.removePetFromFav(petId);
            return ResponseEntity.ok("Pet removed from your favorite list successfully");

        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }



}

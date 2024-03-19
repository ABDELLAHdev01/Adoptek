package com.example.adoptekspring.controller;

import com.example.adoptekspring.domain.favPet;
import com.example.adoptekspring.service.FavPetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
public class favController {
    private final FavPetService favPetService;

    @GetMapping("/helloworld")
    public ResponseEntity<String> helloWorld() {
        return ResponseEntity.ok("Hello World");
    }

    @GetMapping("/getFavPets")
    public ResponseEntity<favPet> getFavPets() {
        return ResponseEntity.ok(favPetService.getFavPets());
    }



}

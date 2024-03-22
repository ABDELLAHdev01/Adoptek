package com.example.adoptekspring.controller;

import com.example.adoptekspring.Auth.AuthenticationService;
import com.example.adoptekspring.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
public class userController {
    private final AuthenticationService authenticationService;


    @GetMapping("getAllUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(authenticationService.getAllUsers());
    }

    @PostMapping("promoteUser/{email}")
    public ResponseEntity<User> promoteUser(
            @PathVariable String email
    ) {
        return ResponseEntity.ok(authenticationService.promoteUser(email));
    }
}

package com.example.adoptekspring.Auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String image;
    private String country;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String status;
    private String password;
}

package com.example.adoptekspring.Auth;

import com.example.adoptekspring.domain.enm.Role;
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
    private Role role;
    private String email;
    private String password;
}

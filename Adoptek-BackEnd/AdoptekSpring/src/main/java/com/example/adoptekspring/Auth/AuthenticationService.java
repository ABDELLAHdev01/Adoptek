package com.example.adoptekspring.Auth;


import com.example.adoptekspring.config.JwtService;
import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.domain.enm.RoleEnum;
import com.example.adoptekspring.repository.UserRepository;
import com.example.adoptekspring.service.AuthorityService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final AuthorityService authorityService;

    public AuthenticationResponse register(RegisterRequest registerRequest) {
        if (!userRepository.findByEmail(registerRequest.getEmail()).isEmpty()) {
            throw new RuntimeException("Email already exists");
        }
        var role = RoleEnum.User;
        var user = User.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .phoneNumber(registerRequest.getPhoneNumber())
                .address(registerRequest.getAddress())
                .roleEnum(role)

                .city(registerRequest.getCity())
                .country(registerRequest.getCountry())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .build();


        userRepository.save(user);
        var JwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(JwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var user = userRepository.findByEmailNativeQuery(request.getEmail()).orElseThrow();
        var JwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(JwtToken)
                .build();

    }

    public Boolean checkIfTokenIsValid(String token) {
        var email = jwtService.extractUsername(token);
        User user = userRepository.findByEmailNativeQuery(email).orElseThrow();
        return jwtService.isTokenValid(token, user);
    }

    public User getUserInformations(String token) {
        var email = jwtService.extractUsername(token);
        return userRepository.findByEmailNativeQuery(email).orElseThrow();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User promoteUser(String email) {
        if (!authorityService.hasRole("Admin")) {
            throw new RuntimeException("You are not authorized to perform this action");
        }
        User user = userRepository.findByEmailNativeQuery(email).orElseThrow();
        user.setRoleEnum(RoleEnum.Admin);
        return userRepository.save(user);
    }
}

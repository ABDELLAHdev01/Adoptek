package com.example.adoptekspring.Auth;

import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class AuthenticationServiceTest {
    private UserRepository userRepository = Mockito.mock(UserRepository.class);
    private AuthenticationService authenticationService = Mockito.mock(AuthenticationService.class);




    @Test
    void register() {
        RegisterRequest registerRequest = RegisterRequest.builder()
                .firstName("test")
                .lastName("test")
                .email("test")
                .phoneNumber("test")
                .address("test")
                .city("test")
                .country("test")
                .password("test")
                .build();
User user = User.builder()
                .firstName("test")
                .lastName("test")
                .email("test")
                .phoneNumber("test")
                .address("test")
                .city("test")
                .country("test")
                .password("test")
                .build();
        when(userRepository.findByEmail("test")).thenReturn(Optional.empty());
        when(userRepository.save(user)).thenReturn(user);
        when(authenticationService.register(registerRequest)).thenReturn(AuthenticationResponse.builder().accessToken("test").build());
        AuthenticationResponse response = authenticationService.register(registerRequest);
        assertEquals("test", response.getAccessToken());

    }


    @Test
    void authenticate() {
        AuthenticateRequest authenticateRequest = AuthenticateRequest.builder()
                .email("test")
                .password("test")
                .build();
        User user = User.builder()
                .firstName("test")
                .lastName("test")
                .email("test")
                .phoneNumber("test")
                .address("test")
                .city("test")
                .country("test")
                .password("test")
                .build();
        when(userRepository.findByEmailNativeQuery("test")).thenReturn(Optional.of(user));
        when(authenticationService.authenticate(authenticateRequest)).thenReturn(AuthenticationResponse.builder().accessToken("test").build());
        AuthenticationResponse response = authenticationService.authenticate(authenticateRequest);
        assertEquals("test", response.getAccessToken());
    }
}
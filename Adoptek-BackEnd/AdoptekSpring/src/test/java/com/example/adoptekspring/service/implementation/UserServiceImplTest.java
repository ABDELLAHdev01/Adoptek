package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.config.JwtService;
import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class UserServiceImplTest {
    private UserRepository userRepository = Mockito.mock(UserRepository.class);
    private PasswordEncoder passwordEncoder = Mockito.mock(PasswordEncoder.class);
    private JwtService jwtService = Mockito.mock(JwtService.class);
    private AuthenticationManager authenticationManager = Mockito.mock(AuthenticationManager.class);
    private UserServiceImpl userService;

    @BeforeEach
    public void setUp() {
        userService = new UserServiceImpl(userRepository);

    }


    @Test
    public void testGetUserByUsername() {
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
        when(userRepository.findByEmail("test")).thenReturn(Optional.of(user));
        User user1 = userService.getUserByUsername("test");
        assertEquals(user, user1);
    }

    @Test
    public void testGetUserByUsernameNotFound() {
        when(userRepository.findByEmail("test")).thenReturn(Optional.empty());
        try {
            userService.getUserByUsername("test");
        } catch (RuntimeException e) {
            assertEquals("User not found", e.getMessage());
        }
    }





}

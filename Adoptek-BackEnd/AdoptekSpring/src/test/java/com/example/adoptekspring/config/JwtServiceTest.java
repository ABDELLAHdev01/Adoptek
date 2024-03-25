package com.example.adoptekspring.config;

import static org.junit.jupiter.api.Assertions.*;


import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


public class JwtServiceTest {

    private JwtService jwtService;
    private final UserDetails userDetails = User.withUsername("testUser").password("testPassword").roles("USER").build();

    @BeforeEach
    public void setUp() {
        jwtService = new JwtService();
    }

    @Test
    public void testGenerateToken() {
        String token = jwtService.generateToken(new HashMap<>(), userDetails);
        assertNotNull(token);
    }

    @Test
    public void testExtractUsername() {
        String token = jwtService.generateToken(new HashMap<>(), userDetails);
        String username = jwtService.extractUsername(token);
        assertEquals(userDetails.getUsername(), username);
    }

    @Test
    public void testIsTokenValid() {
        String token = jwtService.generateToken(new HashMap<>(), userDetails);
        assertTrue(jwtService.isTokenValid(token, userDetails));
    }

    @Test
    public void testIsTokenExpired() {
        String token = jwtService.generateToken(new HashMap<>(), userDetails);
        assertFalse(jwtService.isTokenExpired(token));
    }

    @Test
    public void testExtractClaim() {
        String token = jwtService.generateToken(new HashMap<>(), userDetails);
        Claims claims = jwtService.extractAllClaims(token);
        String username = jwtService.extractClaim(token, Claims::getSubject);
        assertEquals(claims.getSubject(), username);
    }

    @Test
    public void testExtractAllClaims() {
        String token = jwtService.generateToken(new HashMap<>(), userDetails);
        Claims claims = jwtService.extractAllClaims(token);
        assertNotNull(claims);
    }


}
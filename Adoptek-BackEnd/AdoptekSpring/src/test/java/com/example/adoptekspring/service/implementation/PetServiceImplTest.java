package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.repository.PetRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class PetServiceImplTest {
    private final PetRepository petRepository = Mockito.mock(PetRepository.class);
    private final PetServiceImpl petService = new PetServiceImpl(petRepository);
    private AuthenticationManager authenticationManager = Mockito.mock(AuthenticationManager.class);
    // Mock the Authentication object
    Authentication authentication = Mockito.mock(Authentication.class);

    // Mock the SecurityContext object
    SecurityContext securityContext = Mockito.mock(SecurityContext.class);

    @Test
    void createPetSuccessfully() {


        // Set up the SecurityContext to return the mocked Authentication
        when(securityContext.getAuthentication()).thenReturn(authentication);

        // Set up the SecurityContextHolder to return the mocked SecurityContext
        SecurityContextHolder.setContext(securityContext);

        Pet pet = Pet.builder()
                .name("test")
                .ownerPhoneNumber(String.valueOf(065656554))
                .age(1)
                .build();
        when(petRepository.save(pet)).thenReturn(pet);
        Pet pet1 = petService.createPet(pet);
        assertEquals(pet, pet1);
    }


    @Test
    void deletePetSuccessfully() {

        Pet pet = Pet.builder()
                .name("test")
                .age(1)
                .build();
        when(petRepository.findById(1L)).thenReturn(java.util.Optional.of(pet));
        petService.deletePet(1L);
    }

}
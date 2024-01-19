package com.example.adoptekspring.service;

import com.example.adoptekspring.domain.Pet;

import java.util.List;

public interface PetService {

    Pet createPet(Pet pet);

    Pet updatePet(Pet pet);

    void deletePet(Long id);

    Pet getPetById(Long id);

    List<Pet> getAllPets();
}

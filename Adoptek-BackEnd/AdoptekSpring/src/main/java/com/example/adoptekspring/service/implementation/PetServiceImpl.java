package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.repository.PetRepository;
import com.example.adoptekspring.service.PetService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceImpl implements PetService {

    private final PetRepository petRepository;

    public PetServiceImpl(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @Override
    public Pet createPet(Pet pet) {
        return petRepository.save(pet);
    }

    @Override
    public Pet updatePet(Pet pet) {
        Pet pet1 = petRepository.findById(pet.getId()).orElseThrow(() -> new RuntimeException("Pet not found"));
        pet1.setName(pet.getName());
        pet1.setAge(pet.getAge());
        pet1.setBreed(pet.getBreed());
        pet1.setGender(pet.getGender());
        pet1.setWeight(pet.getWeight());
        pet1.setAggressionLevel(pet.getAggressionLevel());
        pet1.setColor(pet.getColor());
        pet1.setDescription(pet.getDescription());
        pet1.setImage(pet.getImage());
        return petRepository.save(pet1);
    }

    @Override
    public void deletePet(Long id) {
        petRepository.deleteById(id);
    }

    @Override
    public Pet getPetById(Long id) {
        return petRepository.findById(id).orElseThrow(() -> new RuntimeException("Pet not found"));
    }

    @Override
    public List<Pet> getAllPets() {
        List<Pet> pets = petRepository.findAll();
        if (pets.isEmpty()) {
            throw new RuntimeException("No pets found");
        }
        return pets;
    }
}

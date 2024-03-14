package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.domain.enm.PetCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {


    List<Pet> findAllByPetCategory(PetCategory petCategory);
    List<Pet> findAllBy();

}

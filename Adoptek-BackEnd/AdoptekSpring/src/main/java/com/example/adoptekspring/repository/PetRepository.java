package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Long> {
}

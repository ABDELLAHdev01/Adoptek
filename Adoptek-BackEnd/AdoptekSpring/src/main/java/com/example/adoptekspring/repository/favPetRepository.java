package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.favPet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface favPetRepository extends JpaRepository<favPet,Long> {
}

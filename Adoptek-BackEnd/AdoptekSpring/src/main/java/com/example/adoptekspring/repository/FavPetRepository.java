package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.domain.favPet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FavPetRepository extends JpaRepository<favPet,Long> {
    Optional<favPet> findByUser(User user);
}

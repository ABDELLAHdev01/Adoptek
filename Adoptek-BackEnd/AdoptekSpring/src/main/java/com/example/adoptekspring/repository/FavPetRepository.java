package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.domain.favPet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavPetRepository extends JpaRepository<favPet,Long> {
    Optional<favPet> findByUser(User user);
}

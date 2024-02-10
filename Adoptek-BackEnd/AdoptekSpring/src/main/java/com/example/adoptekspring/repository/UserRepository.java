package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM user u WHERE u.email = :email", nativeQuery = true)
    Optional<User> findByEmailNativeQuery( String email);

    Optional<User> findByEmail(String email);}

package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

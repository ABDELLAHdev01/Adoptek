package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}

package com.example.adoptekspring.repository;

import com.example.adoptekspring.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}

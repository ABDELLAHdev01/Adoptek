package com.example.adoptekspring.controller;

import com.example.adoptekspring.domain.Article;
import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.dto.ArticleDto;
import com.example.adoptekspring.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
public class articleController {
    private final ArticleService articleService;

    @GetMapping("/getArticles")
    public ResponseEntity<List<Article>> getArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @GetMapping("/getArticle/{articleId}")
    public ResponseEntity<Article> getArticle(@PathVariable Long articleId) {
        return ResponseEntity.ok(articleService.getArticleById(articleId));
    }

    @PostMapping("/createArticle")
    public ResponseEntity<Article> createArticle(@RequestBody ArticleDto article) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Article article1 = Article.builder()
                .title(article.getTitle())
                .content(article.getContent())
                .tags(article.getTags())
                .user(user)
                .build();
        return ResponseEntity.ok(articleService.createArticle(article1));
    }
}

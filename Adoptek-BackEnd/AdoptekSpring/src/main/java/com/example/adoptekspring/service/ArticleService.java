package com.example.adoptekspring.service;

import com.example.adoptekspring.domain.Article;

import java.util.List;

public interface ArticleService {
    Article createArticle(Article article);

    Article updateArticle(Article article);

    void deleteArticle(Long id);

    Article getArticleById(Long id);

    List<Article> getAllArticles();
}

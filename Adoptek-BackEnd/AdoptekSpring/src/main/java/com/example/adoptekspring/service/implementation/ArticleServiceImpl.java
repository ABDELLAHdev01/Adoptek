package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.Article;
import com.example.adoptekspring.repository.ArticleRepository;
import com.example.adoptekspring.service.ArticleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public Article updateArticle(Article article) {
        Article article1 = articleRepository.findById(article.getId()).orElseThrow(() -> new RuntimeException("Article not found"));
        article1.setTitle(article.getTitle());
        article1.setContent(article.getContent());
        article1.setTags(article.getTags());
        return articleRepository.save(article1);
    }

    @Override
    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }

    @Override
    public Article getArticleById(Long id) {
        return articleRepository.findById(id).orElseThrow(() -> new RuntimeException("Article not found"));
    }

    @Override
    public List<Article> getAllArticles() {
    List<Article> articles = articleRepository.findAll();
    if (articles.isEmpty()) {
        throw new RuntimeException("No articles found");
    }
    return articles;
    }
}

package com.example.adoptekspring.dto;

import lombok.*;

import java.util.List;

@Builder
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {

    private String title;
    private String content;
}

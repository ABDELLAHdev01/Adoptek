package com.example.adoptekspring.dto;

import com.example.adoptekspring.domain.Tag;
import com.example.adoptekspring.domain.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
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
    private List<Tag> tags;
}

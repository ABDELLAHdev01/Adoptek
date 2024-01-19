package com.example.adoptekspring.service;

import com.example.adoptekspring.domain.Tag;

import java.util.List;

public interface TagService {

    Tag createTag(Tag tag);

    Tag updateTag(Tag tag);

    void deleteTag(Long id);

    Tag getTagById(Long id);

    List<Tag> getAllTags();
}

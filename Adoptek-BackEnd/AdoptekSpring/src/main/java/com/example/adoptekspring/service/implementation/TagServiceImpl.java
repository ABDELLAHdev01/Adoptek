package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.Tag;
import com.example.adoptekspring.repository.TagRepository;
import com.example.adoptekspring.service.TagService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;

    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public Tag updateTag(Tag tag) {
        Tag tag2 = tagRepository.findById(tag.getId()).orElseThrow(() -> new RuntimeException("Tag not found"));
        tag2.setName(tag.getName());
        return tagRepository.save(tag2);
    }

    @Override
    public void deleteTag(Long id) {
        tagRepository.deleteById(id);
    }

    @Override
    public Tag getTagById(Long id) {
        Tag tag = tagRepository.findById(id).orElseThrow(() -> new RuntimeException("Tag not found"));
        return tag;

    }

    @Override
    public List<Tag> getAllTags() {
        List<Tag> tags = tagRepository.findAll();
        if (tags.isEmpty()) {
            throw new RuntimeException("No tags found");
        }
        return tags;
    }
}

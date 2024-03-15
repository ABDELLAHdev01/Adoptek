package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.repository.UserRepository;
import com.example.adoptekspring.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User getUserByUsername(String owner) {
        return userRepository.findByEmail(owner).orElseThrow(() -> new RuntimeException("User not found"));
    }
}

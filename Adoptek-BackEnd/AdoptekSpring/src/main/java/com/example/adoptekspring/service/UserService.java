package com.example.adoptekspring.service;

import com.example.adoptekspring.domain.User;

public interface UserService {
    User getUserByUsername(String owner);
}

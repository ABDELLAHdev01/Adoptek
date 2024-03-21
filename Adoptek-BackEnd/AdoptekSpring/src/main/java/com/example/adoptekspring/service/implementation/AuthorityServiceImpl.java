package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.service.AuthorityService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthorityServiceImpl implements AuthorityService {
    @Override
    public Boolean hasRole(String role) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user.getRoleEnum().name().equals(role);
    }
}

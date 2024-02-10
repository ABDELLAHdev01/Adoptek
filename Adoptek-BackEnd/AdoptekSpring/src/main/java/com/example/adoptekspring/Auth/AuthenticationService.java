package com.example.adoptekspring.Auth;


import com.example.adoptekspring.config.JwtService;
import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest registerRequest) {
        if (!userRepository.findByEmail(registerRequest.getEmail()).isEmpty()) {
            throw new RuntimeException("Email already exists");
        }
        var user = User.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())

                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .build();



        userRepository.save(user);
        var JwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .token(JwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var user = userRepository.findByEmailNativeQuery(request.getEmail()).orElseThrow();
        var JwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(JwtToken).build();

    }
}

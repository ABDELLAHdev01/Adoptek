package com.example.adoptekspring.Auth;


import com.example.adoptekspring.config.JwtService;
import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.domain.enm.RoleEnum;
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
        var role = RoleEnum.Admin;
        var user = User.builder()
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .email(registerRequest.getEmail())
                .phoneNumber(registerRequest.getPhoneNumber())
                .address(registerRequest.getAddress())
                .image(registerRequest.getImage())
                .roleEnum(role)
                .city(registerRequest.getCity())
                .country(registerRequest.getCountry())
                .state(registerRequest.getState())
                .zipCode(registerRequest.getZipCode())
                .status(registerRequest.getStatus())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .build();



        userRepository.save(user);
        var JwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(JwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var user = userRepository.findByEmailNativeQuery(request.getEmail()).orElseThrow();
        var JwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(JwtToken)
                .build();

    }
}

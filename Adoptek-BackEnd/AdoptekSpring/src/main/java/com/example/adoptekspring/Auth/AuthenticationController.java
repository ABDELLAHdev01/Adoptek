package com.example.adoptekspring.Auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest registerRequest
    ) {

        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticateRequest Request
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(Request));
    }

    @PostMapping("/jwtValidate")
    public ResponseEntity<Boolean> jwtValidate(
            @RequestBody TokenToCheckRequest tokenToCheckRequest
    ) {
        return ResponseEntity.ok(authenticationService.checkIfTokenIsValid(tokenToCheckRequest.getToken()));
    }
}
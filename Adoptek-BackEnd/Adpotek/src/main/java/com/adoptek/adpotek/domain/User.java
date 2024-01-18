package com.adoptek.adpotek.domain;

import com.adoptek.adpotek.domain.enm.Role;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Role role;
    private String firstName;
    private String lastName;
    private String image;
    private String email;
    private String password;
    private String phoneNumber;
    private String country;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String status;
    @OneToMany(mappedBy = "user")
    private List<Pet> pets;

}

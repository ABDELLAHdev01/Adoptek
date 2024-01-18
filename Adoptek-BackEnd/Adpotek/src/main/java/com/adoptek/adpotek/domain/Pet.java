package com.adoptek.adpotek.domain;

import com.adoptek.adpotek.domain.enm.Gender;
import com.adoptek.adpotek.domain.enm.PetCategory;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private PetCategory petCategory;
    private String description;
    private float age;
    private String breed;
    private float height;
    private float weight;
    private Gender gender;
    private String GoodWith;
    private String image;
    private String location;
    private String health;
    private String aggressionLevel;
    private String color;

    @ManyToOne
    private User Owner;


}

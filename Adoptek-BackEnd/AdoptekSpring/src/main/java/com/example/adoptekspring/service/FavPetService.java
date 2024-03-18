package com.example.adoptekspring.service;

import com.example.adoptekspring.domain.favPet;

public interface FavPetService {
    favPet CreateFavPet();
    favPet getFavPets();

    favPet getFavPet();

    favPet addPetToFav(Long petId);
}

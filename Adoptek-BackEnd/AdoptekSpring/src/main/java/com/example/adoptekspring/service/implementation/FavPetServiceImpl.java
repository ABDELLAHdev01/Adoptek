package com.example.adoptekspring.service.implementation;

import com.example.adoptekspring.domain.Pet;
import com.example.adoptekspring.domain.User;
import com.example.adoptekspring.domain.favPet;
import com.example.adoptekspring.repository.FavPetRepository;
import com.example.adoptekspring.repository.PetRepository;
import com.example.adoptekspring.service.FavPetService;
import com.example.adoptekspring.service.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FavPetServiceImpl implements FavPetService {
    private final FavPetRepository favPetRepository;
    private final PetService petService;


    public favPet CreateFavPet() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        favPet newfav = favPet
                .builder()
                .user(user)
                .build();


        return favPetRepository.save(newfav);
    }

    @Override
    public favPet getFavPets() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Optional<favPet> fav = favPetRepository.findByUser(user);

        return fav.orElseGet(this::CreateFavPet);
    }


    @Override
    public favPet getFavPet() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        Optional<favPet> fav = favPetRepository.findByUser(user);
        return fav.orElseGet(this::CreateFavPet);

    }

    public favPet addPetToFav(Long petId) {
        favPet fav = getFavPet();
        Pet Pet = petService.getpetById(petId);
//        check if fav alredy has the pet
        if (fav.getUserFavoritePets().contains(Pet)) {
            throw new RuntimeException("Pet already in your favorite list");
        }
        fav.getUserFavoritePets().add(Pet);
        return favPetRepository.save(fav);
    }

    public favPet removePetFromFav(Long petId) {
        favPet fav = getFavPet();
        Pet Pet = petService.getpetById(petId);
//        check if fav not having the pet
        if (!fav.getUserFavoritePets().contains(Pet)) {
            throw new RuntimeException("Pet not in your favorite list");
        }
        fav.getUserFavoritePets().remove(Pet);
        return favPetRepository.save(fav);
    }

}

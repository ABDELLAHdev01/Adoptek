import { Component } from '@angular/core';

@Component({
  selector: 'app-petcards',
  templateUrl: './petcards.component.html',
  styleUrls: ['./petcards.component.css']
})
export class PetcardsComponent {
  number: number = 20;
  petCards: any[] = [
    {
      name: "Puppy",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70778727/1/?bust=1709722371&width=1080"

    },
    {
      name: "Kitten",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65571433/1/?bust=1690163753&width=1080"

    },
    {
      name: "Dog",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65487109/3/?bust=1689681233&width=1080"

    },
    {
      name: "Cat",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70510488/4/?bust=1706291528&width=1080"

    },
    {
      name: "Rabbit",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65571535/1/?bust=1690166702&width=1080"

    },
    {
      name: "Fish",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64660532/3/?bust=1684867828&width=1080"

    },
    {
      name: "Bird",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52118125/5/?bust=1624654317&width=1080"

    },
    {
      name: "Turtle",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46114674/2/?bust=1569626648&width=1080"

    },
    {
      name: "Hamster",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52118466/4/?bust=1624655313&width=1080"

    },
    {
      name: "Guinea Pig",
      link: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55567079/6/?bust=1652315262&width=1080"

    }
  ];

}

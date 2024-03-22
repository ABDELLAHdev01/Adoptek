import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  quiz: {
    petCategory: string;
    age: number;
    breed: string;
    height: number;
    weight: number;
    gender: string;
    goodWith: string;
    image: string;
    location: string;
    health: string;
    aggressionLevel: string;
    color: string;
  } = {
    petCategory: '',
    age: 0,
    breed: '',
    height: 0,
    weight: 0,
    gender: '',
    goodWith: '',
    image: '',
    location: '',
    health: '',
    aggressionLevel: '',
    color: '',
  };
}

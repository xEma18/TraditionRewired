import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollToStudy() {
    console.log('ciao');
    const studySection = document.querySelector('.question-section');

    if (studySection) {
      studySection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

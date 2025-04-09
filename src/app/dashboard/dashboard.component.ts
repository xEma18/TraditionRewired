import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // Utility functions
  isScrolled = signal(false);

  scrollToStudy() {
    console.log('ciao');
    const studySection = document.querySelector('.question-section');

    if (studySection) {
      studySection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }
}

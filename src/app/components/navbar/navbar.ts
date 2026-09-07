import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnDestroy {

  menuOpen = false;
  activeSection = 'home';

  private observer?: IntersectionObserver;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  ngAfterViewInit() {

    const sections = document.querySelectorAll(
      '#home, #about, #skills, #projects, #analytics, #contact'
    );

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }

        });

      },
      {
        threshold: 0.3
      }
    );

    sections.forEach((section) => {
      this.observer?.observe(section);
    });

  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

}
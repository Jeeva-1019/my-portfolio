import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Analytics } from './pages/analytics/analytics';
import { Contact } from './pages/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Skills, Projects, Analytics, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  protected title = 'my-portfolio';
   ngAfterViewInit() {

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }

        });

      },
      {
        threshold: 0.15
      }
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

  }
}

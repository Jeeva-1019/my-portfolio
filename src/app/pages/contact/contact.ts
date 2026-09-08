import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  sendMessage() {

    const form = document.querySelector('#contact-form') as HTMLFormElement;

    emailjs.sendForm(
      'service_en4xlkq',
      'template_191cvdn',
      form,
      {
        publicKey: 'w4XI6Kal47mpmmPfZ'
      }
    )
    .then(() => {
      alert('Message sent successfully! ✅');
      form.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    });
  }
}
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trackById } from '@projects/shared/utils/utils/functions';

@Component({
  selector: 'app-contact-page',
  template: `
    <section>
      <div>
        <div>
          <!-- <h1>{{ 'CONTACT.TITLE' | translate}}</h1> -->
        </div>
      </div>

      <article>
        <div data-aos="fade-right" class="article-div-left">
          <form [formGroup]="contactForm" (submit)="send($event)">
            <h2>{{ 'CONTACT.SEND_QUERY' | translate }}</h2>

            <input type="text" formControlName="name" name="name" [placeholder]="'CONTACT.YOUR_NAME' | translate"/>
            <div class="article-div-left-errors" *ngIf="showError && contactForm.controls['name']?.errors?.required">{{'FORMS.FIELDS_REQUIRED' | translate}}</div>

            <input type="text" formControlName="email" name="email" [placeholder]="'CONTACT.YOUR_EMAIL' | translate"/>
            <div class="article-div-left-errors" *ngIf="showError && contactForm.controls['email']?.errors?.required">{{'FORMS.FIELDS_REQUIRED' | translate}}</div>
            <div class="article-div-left-errors" *ngIf="showError && contactForm.controls['email']?.status === 'INVALID'">{{'FORMS.EMAIL_FORMAT_INVALID' | translate}}</div>

            <textarea type="text" formControlName="message" [placeholder]="'CONTACT.MESSAGE' | translate"></textarea>
            <div class="article-div-left-errors" *ngIf="showError && contactForm.controls['message']?.errors?.required">{{'FORMS.FIELDS_REQUIRED' | translate}}</div>

            <input type="submit" [value]="'CONTACT.SEND' | translate" />
            <a href="#" #sendForm></a>
          </form>
        </div>

        <div data-aos="fade-left" class="article-div-right">
          <h3>{{ 'CONTACT.WHERE_WE_ARE' | translate }}</h3>

          <div class="article-div-right-div" *ngFor="let item of locationInfo; trackBy: trackById">
            <div class="article-div-right-div-left">
              <mat-icon>{{ item.icon}}</mat-icon>
            </div>

            <div class="article-div-right-div-right">
              <span>{{ item.title | translate }}:</span>
              <p>{{ item.text | translate }}</p>
            </div>
          </div>
        </div>
      </article>

    </section>
  `,
  styleUrls: ['./contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {

  trackById = trackById;
  @ViewChild('sendForm') sendForm!: ElementRef;

  locationInfo: {id:number, icon:string, title:string, text:string}[] = [
    {
      id:1,
      icon:'location_on',
      title:'CONTACT.DIRECTION',
      text:'CONTACT.UBICATION'
    },
    {
      id:2,
      icon:'call',
      title:'CONTACT.PHONE',
      text:'CONTACT.PHONE_NUMBER'
    },
    {
      id:3,
      icon:'email',
      title:'CONTACT.EMAIL',
      text:'CONTACT.EMAIL_TEXT'
    }
  ];

  showError = false;
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailRegEx)]),
    message: new FormControl('',[Validators.required]),
  });


  constructor() { }


  send(event: Event): void{
    event.preventDefault();
    if(this.contactForm.valid){
      this.sendForm.nativeElement.setAttribute('href',`mailto:hcaldez60@gmail.com?subject=nombre: ${this.contactForm.get('name')?.value}, email: ${this.contactForm.get('email')?.value}&body=${this.contactForm.get('message')?.value}`);
      this.sendForm.nativeElement.click();
      this.contactForm.reset();
    }else{
      this.showError = true
    }
  }


}

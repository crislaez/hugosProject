import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { trackById } from '@projects/shared/utils/utils/functions';


@Component({
  selector: 'app-header',
  template:`
    <header *ngIf="check(currentSection) as image" [ngStyle]="{'background-image': 'url(' + image + ')'}">

      <!-- NAV FIXED  -->
      <div *ngIf="showFixedNav" class="header-div-center-fixed">
        <div class="header-div-center header-div-center-fixed" id="navbar" (scroll)="onWindowScroll()">
          <div class="header-div-center-left">
            <img [src]="imageLogo" [alt]=imageLogo/>
          </div>

          <nav>
            <ul>
              <li *ngFor="let item of navList; trackBy: trackById">
                <a [ngClass]="{'active': currentSection === item.link}"  [routerLink]="['/'+item.link]">{{ item.text | translate }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- END NAV FIXED  -->


      <div class="header-wrapper">
        <div class="header-div-up">
          <div>
            <h1>{{ 'COMMONS.TITLE' | translate }}</h1>
          </div>

          <div>
            <span>{{ 'COMMONS.CONTACT_US' | translate }}</span>
            |
            <a href="mailto:hcaldez60@gmail.com">{{ 'COMMONS.EMAIL' | translate }}</a>
          </div>
        </div>

        <div class="header-div-center" id="navbar" (scroll)="onWindowScroll()">
          <div class="header-div-center-left">
            <img [src]="imageLogo" [alt]=imageLogo/>
          </div>

          <nav>
            <ul>
              <li *ngFor="let item of navList; trackBy: trackById">
                <a [ngClass]="{'active': currentSection === item.link}"  [routerLink]="['/'+item.link]">{{ item.text | translate }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header-div-down">
          <div class="header-div-down-empty"></div>
          <div class="header-div-down-div-up">
            <div data-aos="fade-right">
              <p class="header-div-down-div-up-title">{{ 'HEADER.TITLE_UPS' | translate}}</p>
              <br>
              <p class="header-div-down-div-up-title">{{ 'HEADER.TITLE_DOWN' | translate}}</p>
            </div>
            <div data-aos="fade-left">
              <p class="header-div-down-div-up-subtitle">{{ 'HEADER.SUB_TITLE' | translate}}</p>
            </div>
          </div>

          <div class="header-div-down-div-down">
            <button mat-raised-button [routerLink]="['/conocenos']">{{ 'COMMONS.KNOW_US' | translate }}</button>
          </div>
        </div>

        <div class="header-div-down-div-subtitle">
          <h2>{{ fisrtInUpperCase(currentSection) }}</h2>
        </div>
      </div>

    </header>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  trackById = trackById;
  @Input() currentSection!: string | null;
  imageLogo: string = '../../../../assets/images/icon.jpeg';
  navList:{id:number, link:string, text:string}[] = [
    {
      id:1,
      link:'inicio',
      text:'COMMONS.HOME'
    },
    {
      id:2,
      link:'servicios',
      text:'COMMONS.SERVICES'
    },
    {
      id:3,
      link:'contacto',
      text:'COMMONS.CONTACT'
    },
    {
      id:4,
      link:'conocenos',
      text:'COMMONS.KNOW_US'
    }
  ];

  bannerImages: {[key: string]: string} = {
    inicio:'../../../../assets/images/inicio.jpg',
    servicios:'../../../../assets/images/servicios.jpg',
    contacto:'../../../../assets/images/contacto.jpg',
    conocenos:'../../../../assets/images/conocenos.jpg'
  };

  showFixedNav = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('#navbar') as HTMLElement;

    if (window.pageYOffset > element.clientHeight) {
      this.showFixedNav = true;
    } else {
      this.showFixedNav = false;
    }
  }


  constructor() { }


  check(route: string | null): string {
    return this.bannerImages?.[route || ''] || ''
  }

  fisrtInUpperCase(text: string | null = ''): string {
    const editText = (text === 'conocenos') ? 'conócenos' : text;
    const textSplited = editText?.split('');
    const [firstLetter, ...rest] = textSplited || [];

    return [
      ...(firstLetter ? [firstLetter?.toUpperCase()] : []),
      ...(rest ? [rest.join('')] : [])
    ].join('');
  }

}

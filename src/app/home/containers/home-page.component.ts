import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { trackById } from '@projects/shared/utils/utils/functions';

@Component({
  selector: 'app-home-page',
  template: `
    <section>
      <article data-aos="fade-right" class="article-first" >
        <div>
          <div>
            <p>{{ 'HOME.OBJETIVE' | translate }}</p>
            <p class="article-p"><mat-icon>done</mat-icon> {{ 'HOME.COMMITED' | translate }}</p>
          </div>
        </div>

        <div>
          <img [src]="exampleImage" [alt]="exampleImage" loading="lazy"/>
        </div>
      </article>

      <article data-aos="fade-left" class="article-second">
        <div class="article-second-wrapper">
          <div class="article-second-left">
            <div>
              <h3>{{ 'HOME.OUR_COMPANY' | translate }} <mat-icon>minimize</mat-icon></h3>
              <p class="article-p">{{ 'HOME.OUR_COMPANY_MESSAGE' | translate }}</p>
            </div>

            <div class="article-second-left-red">
            </div>
          </div>

          <div class="article-second-right">
            <img [src]="exampleImage" [alt]="exampleImage" loading="lazy"/>
          </div>
        </div>
      </article>

      <article data-aos="fade-right" class="article-third">
        <div class="article-third-up">
          <h3>{{ 'HOME.OUR_SERVICES' |translate }}  <mat-icon>minimize</mat-icon></h3>
          <p>{{ 'HOME.OUR_SERVICES_MESSAGE' | translate }}</p>
        </div>

        <div class="article-third-down">
          <div  #carrusel class="article-third-down-carrousel">
            <div class="article-third-down-carrousel-div">
              <div class="article-third-down-carrousel-div-card" *ngFor="let carrouselItem of carrouselImages; trackBy: trackById">
                <img [src]="carrouselItem.path" [alt]="carrouselItem.path" />
              </div>
            </div>
          </div>
          <div class="article-third-down-button">
            <div>
              <button mat-flat-button (click)="scrollClick('left')"> <mat-icon>keyboard_arrow_left</mat-icon> </button>
              <button mat-flat-button (click)="scrollClick('right')"> <mat-icon>keyboard_arrow_right</mat-icon> </button>
            </div>
          </div>
        </div>
      </article>

      <article data-aos="fade-left" class="article-fourth">
        <div class="article-fourth-wrapper">
          <div class="article-fourth-up">
            <div>
              <h3>{{ 'HOME.OUR_CLIENTS' |translate }} <mat-icon>minimize</mat-icon></h3>
            </div>
          </div>

          <div class="article-fourth-down">
            <div class="article-fourth-down-div" *ngFor="let item of clientsMessages; trackBy: trackById">
              <div class="article-fourth-down-div-div-up">
                <div class="article-fourth-down-div-div-up-icon">
                  <i class="material-icons">format_quote</i>
                </div>
                <div class="article-fourth-down-div-div-up-text">
                  <p>{{ item.text | translate }}</p>
                </div>
              </div>

              <div class="article-fourth-down-div-div-down">
                <img [src]="item.avatar" [alt]="item.name"/>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article data-aos="fade-right" class="article-fifth">
        <div class="article-fifth-wrapper">

          <div class="article-fifth-wrapper-up">
            <div>
              <h3>{{ 'HOME.LAST_NEWS' |translate }}</h3>
            </div>
          </div>

          <div class="article-fifth-wrapper-down">
            <div *ngFor="let item of notices; trackBy: trackById">
              <div class="article-fifth-wrapper-down-div">
                <span>{{ item?.date }}</span>
                <br>
                <h4>{{ item?.title }}</h4>
                <br>
                <span>{{ item?.body }}</span>
                <br>
                <div><a href="#">leer más</a></div>
              </div>
            </div>
          </div>

        </div>
      </article>

    </section>
  `,
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  @ViewChild('carrusel') carrusel!: ElementRef<any>;

  trackById = trackById;
  exampleImage: string = '../../../assets/images/ejemplo.jpg';
  carrouselImages: { id:number, path:string }[] = [
    {
      id:1,
      path:'../../../assets/images/ejemplo.jpg'
    },
    {
      id:2,
      path:'../../../assets/images/ejemplo.jpg'
    },
    {
      id:3,
      path:'../../../assets/images/ejemplo.jpg'
    },
    {
      id:4,
      path:'../../../assets/images/ejemplo.jpg'
    },
    {
      id:5,
      path:'../../../assets/images/ejemplo.jpg'
    },
    {
      id:6,
      path:'../../../assets/images/ejemplo.jpg'
    }
  ];

  clientsMessages:{id:number, text:string, avatar:string, name:string}[] = [
    {
      id:1,
      text:'HOME.OUR_CLIENTS_MESSAGE_1',
      avatar:'../../../assets/images/avatar1.png',
      name:'Roberto Rodriguez'
    },
    {
      id:1,
      text:'HOME.OUR_CLIENTS_MESSAGE_2',
      avatar:'../../../assets/images/avatar2.png',
      name:'Carlos Sanchez'
    }
  ];

  notices: {date:string, title:string, body:string}[] = [
    {
      date:'18 octubre, 2021',
      title:'Formación online bonificada: lo que quieras, cuando y donde quieras.',
      body:'Las empresas disponen de un crédito anual para la formación de su'
    },
    {
      date:'18 octubre, 2021',
      title:'Formación online bonificada: lo que quieras, cuando y donde quieras.',
      body:'Las empresas disponen de un crédito anual para la formación de su'
    },
    {
      date:'18 octubre, 2021',
      title:'Formación online bonificada: lo que quieras, cuando y donde quieras.',
      body:'Las empresas disponen de un crédito anual para la formación de su'
    },
    {
      date:'18 octubre, 2021',
      title:'Formación online bonificada: lo que quieras, cuando y donde quieras.',
      body:'Las empresas disponen de un crédito anual para la formación de su'
    }
  ]


  constructor() { }


  scrollClick(direction:string): void{
    if(direction === 'left'){
      // this.carrusel.nativeElement.scrollLeft -= 300;
      this.carrusel.nativeElement.scrollTo({ left: (this.carrusel.nativeElement.scrollLeft - 355), behavior: 'smooth' });
    }else{
      // this.carrusel.nativeElement.scrollLeft += 300;
      this.carrusel.nativeElement.scrollTo({ left: (this.carrusel.nativeElement.scrollLeft + 355), behavior: 'smooth' });
    }
  }

}

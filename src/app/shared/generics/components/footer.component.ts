import { Component, ChangeDetectionStrategy } from '@angular/core';
import { trackById } from '@projects/shared/shared/utils/utils';

@Component({
  selector: 'app-footer',
  template:`
    <footer>
      <div class="footer-wrapper">

        <div class="footer-div-absolute">
          <ng-container *ngFor="let item of info; trackBy: trackById">
            <div class="footer-div-absolute-div">
              <div class="footer-div-absolute-div-icon">
                <mat-icon> {{item?.icon}}</mat-icon>
              </div>
              <div class="footer-div-absolute-div-info">
                <span>{{ item.message | translate}}</span>
              </div>
            </div>
          </ng-container>
        </div>

        <div class="footer-div-up">
        </div>

        <div class="footer-div-center">
          <div data-aos="zoom-in-down" class="footer-div-up-div">
            <h3>{{ 'FOOTER.SEALS' | translate}}</h3>
            <div class="footer-div-up-div-image">
              <img [src]="emptyImage" [alt]="emptyImage"/>
            </div>
            <div class="footer-div-up-div-image">
              <img [src]="emptyImage" [alt]="emptyImage"/>
            </div>
          </div>

          <div data-aos="zoom-in-down" class="footer-div-up-div">
            <h3>{{ 'FOOTER.RRSS' | translate}}</h3>
            <ng-container *ngFor="let item of rrssInfo; trackBy: trackById">
              <div class="footer-div-up-div-rrss">
                <div class="footer-div-up-div-rrss-image">
                  <img [src]="item?.icon" [alt]="item?.icon"/>
                </div>
                <div class="footer-div-up-div-rrss-text">
                  <a href="#">{{ item.text | translate }}</a>
                </div>
              </div>
            </ng-container>
          </div>

          <div data-aos="zoom-in-down" class="footer-div-up-div">
            <h3>{{ 'FOOTER.BUSINNES' | translate}}</h3>
            <ng-container *ngFor="let text of bussinesInfo; trackBy: trackById">
              <div class="footer-div-up-div-business">
                <a href="#">{{ text | translate }}</a>
              </div>
            </ng-container>
          </div>

          <div data-aos="zoom-in-down" class="footer-div-up-div">
            <h3>{{ 'FOOTER.WHERE_WE_ARE' | translate}}</h3>
            <div class="footer-div-up-div-right-image">
              <img [src]="emptyImage" [alt]="emptyImage" />
            </div>
          </div>
        </div>

        <div class="footer-div-down">
          <span>{{'FOOTER.COPYRIGHT' | translate}}</span>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  trackById = trackById;
  emptyImage = '../../../../assets/images/image_not_found.png';
  rrssInfo:{id:number, icon:string, text:string}[] = [
    {
      id:1,
      icon:'../../../../assets/images/twitter_icon.png',
      text:'COMMONS.TWITTER'
    },
    {
      id:2,
      icon:'../../../../assets/images/linkedin_icon.png',
      text:'COMMONS.LINKEDIN'
    }
  ];

  bussinesInfo: string[] = [
    'FOOTER.LEGAL_WARNING',
    'FOOTER.PRIVACY_POLICY',
    'FOOTER.COOKIE_POLICY'
  ]

  info:{id:number, icon:string, message:string}[] = [
    {
      id:1,
      icon:'location_on',
      message:'FOOTER.UBICATION'
    },
    {
      id:3,
      icon:'email',
      message:'FOOTER.EMAIL'
    },
    {
      id:3,
      icon:'call',
      message:'FOOTER.PHONE'
    }
  ];


  constructor() { }


}

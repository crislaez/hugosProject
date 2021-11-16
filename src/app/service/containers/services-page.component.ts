import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-page',
  template: `
    <section>
      <div>
        <div>
          <!-- <h1>{{ 'SERVICES.TITLE' | translate}}</h1> -->
        </div>
      </div>

      <div>
        <h2>{{ 'SERVICES.SUBTITLE' | translate }}</h2>
        <p>{{ 'SERVICES.PARAGRAPH' | translate }}</p>
      </div>

      <article data-aos="fade-left" class="article">
        <div class="article_big">
          <h3>Sistemas de Gestión</h3>
          <p>is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged. It was popularised in the
             1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
             recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
          </p>
        </div>

        <div class="article_small">
          <img [src]="exampleImage" [alt]="exampleImage" />
        </div>
      </article>


      <article data-aos="fade-right" class="article">
        <div class="article_small">
          <img [src]="exampleImage" [alt]="exampleImage" />
        </div>

        <div class="article_big">
          <h3>Sistemas de Gestión</h3>
          <p>is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged. It was popularised in the
             1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
             recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
          </p>
        </div>
      </article>

      <article data-aos="fade-left" class="article">
        <div class="article_big">
          <h3>Sistemas de Gestión</h3>
          <p>is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged. It was popularised in the
             1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
             recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
          </p>
        </div>

        <div class="article_small">
          <img [src]="exampleImage" [alt]="exampleImage" />
        </div>
      </article>


      <article data-aos="fade-right" class="article">
        <div class="article_small">
          <img [src]="exampleImage" [alt]="exampleImage" />
        </div>

        <div class="article_big">
          <h3>Sistemas de Gestión</h3>
          <p>is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged. It was popularised in the
             1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
             recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
          </p>
        </div>
      </article>


    </section>
  `,
  styleUrls: ['./services-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent {

  exampleImage: string = '../../../assets/images/ejemplo.jpg';

  constructor() { }


}

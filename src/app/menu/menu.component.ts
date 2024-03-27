import { Component } from '@angular/core';
import { ImagesliderComponent } from "../imageslider/imageslider.component";
//import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-menu',
    standalone: true,
    // SlickCarouselModule, 
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [ImagesliderComponent,]
})
export class MenuComponent {
    
        slides: any[] = [
          {
            
            url: ('./media/bgimage1.jpg'),
            title: 'first slide',
            
      
          },
          {
            url: './media/bgimage2.jpg',
            title: 'second slide',
            
            
          },
          {
            url: '../media/loginphoto.jpg',
            title: 'third slide',
            
          },
          {
            url: './media/bgimage5.jpg',
            title: 'fourth slide',
           
          },
        ];
      
        // caption: [
        //     description: 'Welcome to our world of delectable meals and exotic drinks. We hope to satisfy you with our delicious and affordable meals served under a great ambience.'
        //     description: 'Food is an important part of any celebration in all nations of the world, regardless of culture or religion.'
        //     description:'Healthy and Delicious food to make every occasion special'
        //     description: 'Here are some of our local Dishes'
        // ]
        items: any[] = [];
      
}
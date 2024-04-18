import { Component } from '@angular/core';
import { ImagesliderComponent } from "../imageslider/imageslider.component";
import { FormsModule } from '@angular/forms';
//import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-menu',
    standalone: true,
    // SlickCarouselModule, 
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [ImagesliderComponent,FormsModule]
})
export class MenuComponent {
  
menuName = 'Order Now'



onButtonGroupClick($event: { target: any; srcElement: any; }){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }
  }
      
        // caption: [
        //     description: 'Welcome to our world of delectable meals and exotic drinks. We hope to satisfy you with our delicious and affordable meals served under a great ambience.'
        //     description: 'Food is an important part of any celebration in all nations of the world, regardless of culture or religion.'
        //     description:'Healthy and Delicious food to make every occasion special'
        //     description: 'Here are some of our local Dishes'
        // ]
        items: any[] = [];
      
}
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-intro',
    standalone: true,
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.css',
    imports: [FooterComponent]
})
export class IntroComponent {

}

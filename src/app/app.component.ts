import { Component } from '@angular/core';
import { Ipost } from './shared/models/post';
import { posts } from './shared/const/posts';
import { Imobile } from './shared/models/mobile';
import { mobileProducts } from './shared/const/mobiles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-ang-concepts';

  postArr: Array<Ipost> = posts;
  mobileArr : Array<Imobile> = mobileProducts

  show: boolean = false
  
  removeOnclick(){
    this.show = true
  }
  hideModal(flag: boolean){
    this.show = flag
  }
}

import { Component } from '@angular/core';
import { Ipost } from './shared/models/post';
import { posts } from './shared/const/posts';
import { Imobile } from './shared/models/mobile';
import { mobileProducts } from './shared/const/mobiles';
import { Iplayer } from './shared/models/player';
import { cricketPlayers } from './shared/const/players';

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


  para: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellendus temporibus odit praesentium aliquam incidunt soluta tempora molestias tenetur maxime eum, possimus autem? Debitis accusantium fugiat fuga doloremque, minus voluptatum! Officiis, non? Sint commodi consequuntur fuga dolore culpa nihil voluptates, quam debitis soluta deleniti atque praesentium molestias minima quasi eius! Eaque commodi voluptatum aliquid maxime ipsum, eveniet quos quas tempora corporis praesentium. Nihil fugiat consequuntur quos assumenda perferendis nemo, pariatur maxime dolores molestiae ducimus tempore obcaecati iste. Quae laudantium eveniet architecto totam quasi dolorem consequatur omnis quis doloremque! Tempore dolor unde consequuntur praesentium nulla tempora aliquid enim molestiae animi quae!"


  playersArr : Array<Iplayer> = cricketPlayers;
  searchVal !: string
  selectedField !: string 


  
}

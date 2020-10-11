import { Component, OnInit } from '@angular/core';
//declare const navSlide: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  constructor() {

    const navSlide = () =>{

      (document.getElementById("topImg") as HTMLImageElement).src = "./../../assets/mainpage_cover5.png";

      const burger = document.querySelector('.burger')
      const nav = document.querySelector('.nav-links')
      const cover = document.querySelector('.cover')
      const navLink = document.querySelectorAll('.nav-links li a')
  
      burger.addEventListener('click',()=>{
          nav.classList.toggle('nav-active')
          cover.classList.toggle('dimmer')
          // burger animation
          burger.classList.toggle('toggle');
      }
      )
  
      
  
      
  }
    navSlide();
   }

  ngOnInit(): void {
  }

}

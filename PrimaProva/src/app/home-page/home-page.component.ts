import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { offerta } from '../models/offerte';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
   offerte:offerta[]=[];
  constructor(private service:GeneralService) { }
  getData(){
    this.service.getOfferte().subscribe((data)=>{
     this.offerte=data;
    })
  }
  ngOnInit() {
    this.getData();
  }

}

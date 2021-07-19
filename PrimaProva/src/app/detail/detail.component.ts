import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';
import { offerta } from '../models/offerte';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
offerta:offerta;
 

id: any;

constructor(private route: ActivatedRoute, private api: GeneralService) { }



ngOnInit(): void {
  this.route.paramMap.subscribe(param => {
    const id = param.get('id');
    this.id = id;
    this.api.getOfferta(id).subscribe(y => {
      this.offerta = y;
    })
  });

}


}

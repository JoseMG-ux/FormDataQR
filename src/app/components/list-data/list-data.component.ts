import { Component, OnInit } from '@angular/core';
import { PersonaldataService } from '../../services/personaldata.service';
import { Datos } from '../../models/profile';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

   tasks: Datos[];
  constructor(
    public instancePersonalDataService: PersonaldataService
  ) { }



  ngOnInit(){
    this.tasks = this.instancePersonalDataService.getInfoPersonal()
    console.log(this.tasks);
  }

}

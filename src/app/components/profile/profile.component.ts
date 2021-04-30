import { Component, OnInit, Input } from '@angular/core';
import { Datos } from '../../models/profile'
import { PersonaldataService } from '../../services/personaldata.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() task: Datos;

  constructor(
    public instancePersonalDataService: PersonaldataService
  ) { }

  ngOnInit() {
  }

}

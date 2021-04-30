
import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QrScannerComponent } from 'angular2-qrscanner';
import { PersonaldataService } from './services/personaldata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  user: any;
  user1: any;
  title = 'formdataqrs';
  @ViewChild(QrScannerComponent, { static: false }) qrScannerComponent: QrScannerComponent ;

  public dataForm:FormGroup;

  // public testform:FormGroup;
  constructor(
    private fb: FormBuilder,
    public instancePersonalDataService: PersonaldataService
    ){  };
  // public instancePersonalDataService: PersonaldataService
  ngOnInit(){

    this.dataForm = this.fb.group({
                fctId: new FormControl("", [Validators.required]),
                fctName: new FormControl("", [Validators.required]),
                fctLastN: new FormControl("", [Validators.required]),
                fctSex: new FormControl("", [Validators.required]),
                fctDirection: new FormControl("", [Validators.required]),
                fctDateB: new FormControl("", [Validators.required]),
                fctNact: new FormControl("", [Validators.required]),
                fctDateExpd: new FormControl("", [Validators.required]),
                fctDateCad: new FormControl("", [Validators.required]),
    });




  }

  addData(fctId: HTMLInputElement, fctName: HTMLInputElement, fctLastN: HTMLInputElement, fctSex: HTMLInputElement, fctDirection: HTMLInputElement, fctDateB: HTMLInputElement, fctNact: HTMLInputElement, fctDateExpd: HTMLInputElement, fctDateCad:HTMLInputElement){

    this.instancePersonalDataService.addInforPersonal({
      id: fctId.value,
      name: fctName.value,
      lastname: fctLastN.value,
      sex: fctSex.value,
      direction: fctDirection.value,
      dateNac: fctDateB.value,
      Nacionality: fctNact.value,
      dateExpd: fctDateExpd.value,
      dateCadu: fctDateCad.value,
    });
        fctId.value = ''
        fctName.value = ''
        fctLastN.value = ''
        fctSex.value = ''
        fctDirection.value = ''
        fctDateB.value = ''
        fctNact.value = ''
        fctDateExpd.value = ''
        fctDateCad.value = ''


    return false;
  }

  ngAfterViewInit(): void {
        this.qrScannerComponent.getMediaDevices().then(devices => {
          const videoDevices: MediaDeviceInfo[] = [];
          for (const device of devices) {
              if (device.kind.toString() === 'videoinput') {
                  videoDevices.push(device);
              }
          }
          if (videoDevices.length > 0){
              let choosenDev;
              for (const dev of videoDevices){
                console.log(videoDevices[0]);
                  if (dev.label.includes('front')){
                      choosenDev = dev;
                      break;

                  }
              }
              if (choosenDev) {
                  this.qrScannerComponent.chooseCamera.next(choosenDev);

              } else {
                  this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
              }
          }
        });


          var myArrClean =[];
          this.qrScannerComponent.capturedQr.subscribe(result => {

              let newArray = result.split("|");//Introduce los datos en un Array
              myArrClean = newArray.filter(Boolean);//Quita los espacios en blanco innecesario del Array
              // localStorage.setItem('MyArray', JSON.stringify(myArrClean));
              // this.user = JSON.parse(localStorage.getItem('MyArray') || '{}');
              this.dataForm = this.fb.group({
                fctId: new FormControl( myArrClean[0], [Validators.required]),
                fctName: new FormControl(myArrClean[1], [Validators.required]),
                fctLastN: new FormControl(myArrClean[2], [Validators.required]),
                fctSex: new FormControl(myArrClean[3], [Validators.required]),
                fctDirection: new FormControl(myArrClean[4], [Validators.required]),
                fctDateB: new FormControl(myArrClean[5], [Validators.required]),
                fctNact: new FormControl(myArrClean[6], [Validators.required]),
                fctDateExpd: new FormControl(myArrClean[7], [Validators.required]),
                fctDateCad: new FormControl(myArrClean[8], [Validators.required]),
              })
          });


      }


}

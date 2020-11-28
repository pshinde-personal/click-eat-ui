import { RestaurantClass } from './../../models/restaurant.class';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(
    private _flash: FlashMessagesService,
    private _router: Router,
    private _resturantService: RestaurantService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('addRestaurantForm') form;
  @Input() user: any;

  newRestaurant = new RestaurantClass();

  services: Array<{id: number, name: string, selected: boolean}>  = [
    { id: 0, name: 'Home Delivery', selected: false},
    { id: 1, name: 'Dine-in',  selected: false},
    { id: 2, name: 'Parking',  selected: false},
    { id: 3, name: 'Separate veg/non-veg sections',  selected: false},
    { id: 4, name: 'Kids Play Area',  selected: false},
    { id: 5, name: 'Bear Bar',  selected: false},
    { id: 6, name: 'Family Rooms',  selected: false},
  ];

  speciality: Array<{id: number, name: string, selected: boolean}> = [
    { id: 0, name: 'Veg', selected: false},
    { id: 1, name: 'Non-Veg', selected: false},
    { id: 2, name: 'Both', selected: false},
  ];

  toggleLodging() {
    this.newRestaurant.lodging = !this.newRestaurant.lodging;
    return;
  }

  makeArrayFromCheckBoxValues(req: Array<{id: number, name: string, selected: boolean}>) {
    let res: Array<string> = [];
    req.forEach((obj) => {
      if(obj.selected) {
        res.push(obj.name);
      }
    })
    return res;
  }

  onRestaurantSubmit() {
    // this._flash.show('submit succesful', { cssClass: 'alert-success', timeout: 5000});

    this.newRestaurant.services = this.makeArrayFromCheckBoxValues(this.services);
    this.newRestaurant.speciality = this.makeArrayFromCheckBoxValues(this.speciality);
    this.newRestaurant.owner = this.user;
    
    if(this.form.valid) {
      alert('form is valid');
      this._resturantService.addNewRestaurant(this.newRestaurant).subscribe((res)=> {
        console.log(res);
        this.form.reset();
        this._router.navigate(['/']);
        this._flash.show('Restaurant data saved successfully', {cssClass: 'alert-success', timeout: 5000})
      }, (err)=> {
        console.log(err);
        this._flash.show(err.error.error, { cssClass: 'alert-danger', timeout: 5000});
        
      })
      
    }
    else {
    // this._flash.show('something missing, make sure you have filled everything', { cssClass: 'alert-danger', timeout: 5000});
      alert('form is Not Valid');
    }
    
    console.log(this.newRestaurant);
    
  }
}

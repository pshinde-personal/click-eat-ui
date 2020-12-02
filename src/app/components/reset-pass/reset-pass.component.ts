import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _flash: FlashMessagesService
  ) { }

  hash: string;
  newPass: string;
  pass1: string;
  pass2: string;

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.hash = params.get('hash');
    })
  }

  onResetSubmit() {
    this.newPass = (this.pass1 == this.pass2) ? this.pass2 : undefined;

    this._auth.handleResetPass(this.newPass, this.hash).subscribe( data => {
      this._flash.show('password updated successfully, please login to continue', { cssClass: 'alert-success', timeout: 10000 })
      this._auth.logOutUser();
      this._router.navigate(['login']);
    }, err => {
      this._flash.show(err, { cssClass: 'alert-danger', timeout: 10000 })
    });
    return ;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-fogot-pass',
  templateUrl: './fogot-pass.component.html',
  styleUrls: ['./fogot-pass.component.css']
})
export class FogotPassComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _flash: FlashMessagesService
  ) { }

  @ViewChild('form') form;
  emailId: string;

  ngOnInit(): void {
  }

  onForgotPassSubmit() {
    this._auth.handleForgotPass(this.emailId).subscribe((data: { success: boolean, data: string}) => {
      let id = data.data;
      this._router.navigate(['/reset_pass', id]);
      this.form.reset();
    }, err => {
      this._flash.show(err, { cssClass: 'alert-danger', timeout: 10000});
    })
    return ;
  }
}

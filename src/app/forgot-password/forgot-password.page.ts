import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public password: any = '';

  constructor(  private alertController: AlertController) { }

  reset() {
    
   localStorage.setItem('password', this.password);

   if ( this.password) {
    
    this.presentLoginAlert();
    
    
  }
  }
 

  ngOnInit() {
  }


  // Function to present an alert for successful login
  async presentLoginAlert() {
    const alert = await this.alertController.create({
      message: 'Password changed successfully!',
      buttons: ['OK']
    });

    await alert.present();
  }

}

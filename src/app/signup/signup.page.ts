import { Component, OnInit } from '@angular/core';

import { AlertController, ModalController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
 
  public username: string = '';
  public password: string = '';
  public fullName: string = '';
  public contactNum: string = '';
  public savedData: any = [''];
  alertButtons = ['Ok'];
  public termsAccepted: boolean = false;

  constructor(private toastController: ToastController, private alertController: AlertController, private modal: ModalController) { }
  
  signup() {

    if(!this.username || !this.password || !this.fullName || !this.contactNum){
      this.presentToast();
    }else{
    // Perform signup logic
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    localStorage.setItem('full name', this.fullName);
    localStorage.setItem('contact number', this.contactNum);
   

    
  
    this.presentLoginAlert();
    this.resetInputs();
  }

  
    //for checkbox
    if(this.termsAccepted){}
    }
   
  ngOnInit() {
  }

  //number input only on contact number input
  validateInput(event: any) {
    const input = String.fromCharCode(event.charCode);
    const isNumeric = /^[0-9]*$/.test(input);
    if (!isNumeric) {
      event.preventDefault();
    }

  }

  // Function to create and present a toast
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please fill up all inputs', // Your message
      duration: 2000, // Duration in milliseconds
      position: 'bottom'
    });

    toast.present();
  }

  // Function to present an alert for successful login
  async presentLoginAlert() {
    const alert = await this.alertController.create({
      message: 'Registered successfully!, go back to login now.',
      buttons: ['OK']
    });

    await alert.present();
  }

  resetInputs(){
    this.username = '';
    this.password = '';
    this.fullName = '';
    this.contactNum = '';
    localStorage.setItem('savedData', this.savedData );
  }
  

  dismissModal() {
    this.modal.dismiss(null, 'cancel');
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
 
 

  constructor(private router: Router, private toastController: ToastController, private alertController: AlertController) { }
  
  login() {
    // Perform login logic
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (this.username === storedUsername && this.password === storedPassword) {
    
      this.presentLoginAlert();
      this.router.navigate(['/home']);
      
    } else {
      this.presentToast();
     
    }

  }

  // Function to create and present a toast
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid input, please make sure they are correct', // Your message
      duration: 2000, // Duration in milliseconds
      position: 'bottom'
    });

    toast.present();
  }

  // Function to present an alert for successful login
  async presentLoginAlert() {
    const alert = await this.alertController.create({
      header: 'Login Successful',
      message: 'Welcome back! You have successfully logged in.',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  ngOnInit() {
  }

}

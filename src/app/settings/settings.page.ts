import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public subTitle: string = 'Settings';
  public subTitleHelp: string = 'Help';
  public subAccount: string = 'Account';
  constructor(private toastController: ToastController) { }

  public username: any = '';
  public contactNum: any = '';

  ngOnInit() {
    //to get the item in local storage with the key 'username'
    this.username = localStorage.getItem('username');

    //to get the item in local storage with the key 'contact number'
    this.contactNum = localStorage.getItem('contact number');

  }


  // Function to create and present a toast
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Coming soon!', // Your message
      duration: 2000, // Duration in milliseconds
      position: 'bottom'
    });

    toast.present();
  }

}

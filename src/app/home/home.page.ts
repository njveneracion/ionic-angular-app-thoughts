// src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public dataForm!: FormGroup;
  public savedData: any[] = [];
  public alertButtons = ['Ok'];
  public fullName:any;
  public username:any;
  public contactNum: any;
 

  public selectedAvatar: string ='';

  constructor(private formBuilder: FormBuilder, private alertController: AlertController, private toastController: ToastController) {
  }

  ngOnInit() {
    // Initialize the form
    this.dataForm = this.formBuilder.group({
      input1: [''],
      input2: [''],
      input3: [''],
      input4: [''],
      // Add more form controls as needed
    });

    // Retrieve saved data from local storage on page load
    const localStorageData = localStorage.getItem('savedData');
    this.savedData = localStorageData ? JSON.parse(localStorageData) : [];


    //to get the item in local storage with the key 'full name'
    this.fullName = localStorage.getItem('full name');

    //to get the item in local storage with the key 'username'
    this.username = localStorage.getItem('username');

    //to get the item in local storage with the key 'contact number'
    this.contactNum = localStorage.getItem('contact number');



  }

  saveFormData() {
    if (this.dataForm.valid) {
      const input1Value = this.dataForm.get('input1')?.value || 'Anonymous';
      const input2Value = this.dataForm.get('input2')?.value || '';
      const currentDatestamp = this.getCurrentDatestamp();
      const currentTimestamp = this.getCurrentTimestamp();

      // Create an object to store the form data
      const formData = {
      input1: input1Value,
      input2:input2Value,
      input3: currentDatestamp,
      input4: currentTimestamp,
      };

      // Save the form data to local storage
      this.savedData.push(formData);
      localStorage.setItem('savedData', JSON.stringify(this.savedData));

      this.postedAlert();


      // Reset the form
      this.dataForm.reset();
    }
  }

    deleteItem(item: any) {
      // Remove the item from the savedData array
      const index = this.savedData.findIndex(savedItem => savedItem === item);
      if (index !== -1) {
        this.savedData.splice(index, 1);

        // Update local storage
        localStorage.setItem('savedData', JSON.stringify(this.savedData));
      }
  }

  async confirmDelete(item: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteItem(item);
          },
        },
      ],
    });

    await alert.present();
  }
  
  getCurrentDatestamp(): string {
    return new Date().toLocaleDateString();
  }

  getCurrentTimestamp(): string {
    return new Date().toLocaleTimeString();
  }

  
 // Function to present an alert for successful login
 async postedAlert() {
  const alert = await this.alertController.create({
    message: 'Posted successfully!',
    buttons: ['OK']
  });

  await alert.present();
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

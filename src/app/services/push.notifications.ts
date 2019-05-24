import { Injectable } from '@angular/core';
import { Platform, AlertController } from "ionic-angular";
import { OneSignal, OSNotificationOpenedResult } from '@ionic-native/onesignal';
@Injectable()
export class PushNotifications {
  options: any
  constructor(public platform: Platform, public alertCtrl: AlertController, private oneSignal: OneSignal) { }

  InitPush() {
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }

    //this.oneSignal.startInit('69244d6c-fd28-44b0-a278-2a7bf5d68e5e', '498431685495');

    this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
     
      //this.showAlert(nav, "123", JSON.stringify(jsonData), ["OK", "home", "0"]); ;
      // do something when notification is received
     // console.log('handleNotificationReceived: ' + JSON.stringify(jsonData)); 
    });

    this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
      // do something when a notification is opened
      //console.log('handleNotificationOpened: ' + JSON.stringify(jsonData));

      let oSNotificationOpenedResult: OSNotificationOpenedResult
      oSNotificationOpenedResult = jsonData;
      //console.log("oSNotificationOpenedResult:" + oSNotificationOpenedResult);
      //console.log("oSNotificationOpenedResult.notification:" + oSNotificationOpenedResult.notification);
      //console.log("oSNotificationOpenedResult.notification.payload:" + oSNotificationOpenedResult.notification.payload);
      //console.log("oSNotificationOpenedResult.notification.payload.additionalData:" + JSON.stringify(oSNotificationOpenedResult.notification.payload.additionalData));

      let _NotTitle: string = oSNotificationOpenedResult.notification.payload.title;
      let _NotBody: string  = oSNotificationOpenedResult.notification.payload.body;

      if (oSNotificationOpenedResult.notification.payload.additionalData == undefined) {
      //  this.showAlert(nav, _NotTitle, _NotBody, ["OK", "home", "0"]);
        
      }
      else {
        //let jsonObject: any = oSNotificationOpenedResult.notification.payload.additionalData;
        //let key, value: string;
        ////alert("jsonObject: " + JSON.stringify(jsonObject));
        //for (var prop in jsonObject) {
        //  key = prop;
        //  value = jsonObject[prop];
        //}
        //this.showConfirm(nav, _NotTitle, _NotBody, ["Cancel", "home", "0"], ["OK", key, value]);
      }
    });

    //for ios
    this.oneSignal.promptForPushNotificationsWithUserResponse().then((userResponse) => {
     // console.log("User accepted notifications: \(accepted)");
    });
      
    this.oneSignal.getIds().then((jsonData) => {
     // console.log('getIds: ' + JSON.stringify(jsonData));
    });

    // this.settings.load().then(() => {
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      //alert("setSubscription:" + <boolean>this.options.NotificationsEnable);
      this.oneSignal.setSubscription(<boolean>true)
      this.oneSignal.enableVibrate(<boolean>true);
     // alert("NotificationsEnableVibrate: " + <boolean>this.options.NotificationsEnableVibrate);
      this.oneSignal.enableSound(<boolean>true);
      //alert("NotificationsEnableSound: " + <boolean>this.options.NotificationsEnableSound);
      this.oneSignal.startInit('55bac342-c1a1-4673-9b38-d089f707a6ec', '1087592373609'); 
      this.oneSignal.endInit();
    // });


  // this.oneSignal.setSubscription(true);
   //this.oneSignal.enableVibrate(true);
   //this.oneSignal.enableSound(true);    
  }


  SetSubscription(value: boolean) {
    this.oneSignal.setSubscription(true);
  }

  SetVibrate(value: boolean) {
    this.oneSignal.enableVibrate(true);
  }

  SetSound(value: boolean) {
    this.oneSignal.enableSound(true);
  }

  showConfirm(nav:any,_title: string, _message: string, CancelButton: [string, string, string], OkButton: [string, string,string]) {
    const confirm = this.alertCtrl.create({
      title: _title,
      message: _message,
      buttons: [
        {
          text: CancelButton["0"],
          handler: () => {
            if (CancelButton["1"] == "home") {
              // this._MyApp.openPage('HomePage');
              nav.setRoot('HomePage');
            }
          }
        },
        {
          text: OkButton["0"],
          handler: () => {
            if (OkButton["1"] == "news") {
              nav.setRoot('NewsDetailsPage', { newsID: OkButton["2"] });
             // this._MyApp.openPage('NewsPage');//, { id: OkButton["2"] }
            }
          }
        }
      ]
    });
    confirm.present();
  }


  showAlert(nav:any,_title: string, _message: string, button: [string, string, string]) {
    const alert = this.alertCtrl.create({
      title: _title,
      subTitle: _message,
      buttons: [
        {
          text: button["0"],
          handler: data => {
            //console.log('Cancel clicked');
            if (button["1"] == "home") {
             // this._MyApp.openPage('HomePage');
              nav.setRoot('HomePage');
            }
          }
        }
      ]
    });
    alert.present();
  }


}

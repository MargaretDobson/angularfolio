import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class IntroService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    // Set data for - WIZARD MAIN
    getData = (): any => {
        return {
           "backgroundImage": "assets/imgs/background/39.jpg",
           "btnPrev": "Previous",
           "btnNext": "Next",
           "btnFinish": "Finish",
           "items": [
               {
                  "avatarImage": "assets/imgs/background/28.jpg",
                   "logo": "assets/imgs/logo/2.png",
                   "title": "Welcome to my angular template.",
                   "description": "Feel free to look around and enjoy your stay"
               },
               {
                  "avatarImage": "assets/imgs/background/29.jpg",
                   "logo": "assets/imgs/logo/2.png",
                   "title": "I enjoy making beautiful things work together",
               },
           ]
        };
    }

    load(): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('intro')
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}

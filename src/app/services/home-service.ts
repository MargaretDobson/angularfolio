import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { IService } from './IService';

@Injectable({ providedIn: 'root' })
export class HomeService{

    constructor(public af: AngularFireDatabase) { }

    // Set data for - HOME PAGE
    getData = () => {
        return {
            'toolbarTitle': 'Welcome to my Angular portfolio',
            'title': 'Hello and welcome',
            'subtitle': 'So you are thinking about hiring me?',
            'subtitle2': 'Please find code examples in this portfolio, thankyou for your time',
            'link': '',
            'description': '',
            'background': 'assets/imgs/background/39.jpg'
        };
    }

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}

import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ImageGalleryService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Image Gallery';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'image-gallery/1', 'title': 'Photo Gallery', 'theme': 'layout2' },
        ];
    }

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Thumb grid',
            "items": [
                {
                    "id": 1,
                    "image": "assets/imgs/gallery/thumb-grid/1.jpg"
                },
                {
                    "id": 2,
                    "image": "assets/imgs/gallery/thumb-grid/2.jpg"
                },
                {
                    "id": 3,
                    "image": "assets/imgs/gallery/thumb-grid/3.jpg"
                },
                {
                    "id": 4,
                    "image": "assets/imgs/gallery/thumb-grid/4.jpg"
                },
                {
                    "id": 5,
                    "image": "assets/imgs/gallery/thumb-grid/5.jpg"
                },
                {
                    "id": 6,
                    "image": "assets/imgs/gallery/thumb-grid/6.jpg"
                },
                {
                    "id": 7,
                    "image": "assets/imgs/gallery/thumb-grid/7.jpg"
                },
                {
                    "id": 8,
                    "image": "assets/imgs/gallery/thumb-grid/8.jpg"
                },
                {
                    "id": 9,
                    "image": "assets/imgs/gallery/thumb-grid/9.jpg"
                },
                {
                    "id": 10,
                    "image": "assets/imgs/gallery/thumb-grid/10.jpg"
                },
                {
                    "id": 11,
                    "image": "assets/imgs/gallery/thumb-grid/11.jpg"
                },
                {
                    "id": 12,
                    "image": "assets/imgs/gallery/thumb-grid/12.jpg"
                },
                {
                    "id": 13,
                    "image": "assets/imgs/gallery/thumb-grid/13.jpg"
                },
                {
                    "id": 14,
                    "image": "assets/imgs/gallery/thumb-grid/14.jpg"
                },
                {
                    "id": 15,
                    "image": "assets/imgs/gallery/thumb-grid/15.jpg"
                },
                {
                    "id": 16,
                    "image": "assets/imgs/gallery/thumb-grid/16.jpg"
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('imageGallery/' + item.theme)
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
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}

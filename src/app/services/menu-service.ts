import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'menu';

  getTitle = (): string => 'UIAppTemplate';

  //* Data Set for main menu
  getAllThemes = (): Array<any> => {
    return [
      {
        'url': 'items/parallax',
        'title': 'Parallax',
        'theme': 'parallax',
        'icon': 'icon-format-line-spacing',
        'listView': false,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'items/imageGallery',
        'title': 'Image Gallery',
        'theme': 'imageGallery',
        'icon': 'icon-apps',
        'listView': false,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'items/profile',
        'title': 'Profile',
        'theme': 'profile',
        'icon': 'icon-account-outline',
        'listView': false,
        'component': '',
        'singlePage': false
      },
      {
        'url': 'items/actionSheet',
        'title': 'Action Sheet',
        'theme': 'actionSheet',
        'icon': 'icon-dots-horizontal',
        'listView': false,
        'component': '',
        'singlePage': false
      },
    ];
  }

  getDataForTheme = (menuItem: any) => {
    return {
      'background': 'assets/imgs/background/39.jpg',
      'image': '',
      'title': ''
    };
  }

  getEventsForTheme = (menuItem: any): any => {
    return {};
  }

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: {},
      events: this.getEventsForTheme(item)
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('menu')
          .valueChanges()
          .subscribe(snapshot => {
            this.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            this.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        this.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}

import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ParallaxService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getTitle = (): string => 'Parallax';

  getAllThemes = (): Array<any> => {
    return [
      { 'url': 'parallax/1', 'title': 'Profile', 'theme': 'layout2' },
    ];
  }

  getDataForTheme = (menuItem: any): any => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  }

  //* Data Set for page 1
  getDataForLayout1 = (): any => {
    return {
      'toolbarTitle': 'News List',
      "headerImage": "assets/imgs/background/34.jpg",
      "title": "Engage real-time",
      "subtitle": "Startup Pitches",
      "items": [
        
      ]
    };
  }

  //* Data Set for page 2
  getDataForLayout2 = (): any => {
    return {
      'toolbarTitle': 'Profile',
      "headerImage": "assets/imgs/background/36.jpg",
      "avatar": "assets/imgs/avatar/14.jpg",
      "title": "Jessica White",
      "subtitle": "Lorem ipsum dolor sit amet",
      "buttonFollowers": "Followers",
      "buttonFollowing": "Following",
      "buttonEvents": "Events",
      "followers": "2300",
      "following": "3230",
      "events": "230",

      // Data Page 1
      "page1": {
        "items": [
          {
            "id": 1,
            "button": "Read more",
            "image": "assets/imgs/background/21.jpg",
            "title": "Osteria Francescana",
            "subtitle": "Modena, Italy",
          },
          {
            "id": 2,
            "button": "Read more",
            "image": "assets/imgs/background/19.jpg",
            "title": "Camping du Brec",
            "subtitle": "Le Brec, France",
          },
          {
            "id": 3,
            "button": "Read more",
            "image": "assets/imgs/background/20.jpg",
            "title": "Park Winterberg",
            "subtitle": "Winterberg, Germany",
          },
          {
            "id": 4,
            "button": "Read more",
            "image": "assets/imgs/background/12.jpg",
            "title": "Singapore Airlines",
            "subtitle": "Singapore, ",
          },
          {
            "id": 5,
            "button": "Read more",
            "image": "assets/imgs/background/16.jpg",
            "title": "Osteria Francescana",
            "subtitle": "Modena, Italy",
          },
          {
            "id": 6,
            "button": "Read more",
            "image": "assets/imgs/background/22.jpg",
            "title": "Park Winterberg",
            "subtitle": "Winterberg, Germany",
          }
        ]
      },
      // Data Page 2
      "page2": {
        "items": [
          {
            "id": 1,
            "title": "Isabel Anguiano",
            "image": "assets/imgs/avatar/24.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 2,
            "title": "Iria Mascareñas",
            "image": "assets/imgs/avatar/10.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 3,
            "title": "Maria Cardenas",
            "image": "assets/imgs/avatar/11.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 4,
            "title": "Silvia Salvador",
            "image": "assets/imgs/avatar/12.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 5,
            "title": "Marina Vidal",
            "image": "assets/imgs/avatar/13.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 6,
            "title": "Sara Alcántarl",
            "image": "assets/imgs/avatar/14.jpg",
            "ionButton": "Follow",
          },
          {
            "id": 7,
            "title": "Gabriela Reyes",
            "image": "assets/imgs/avatar/15.jpg",
            "ionButton": "Follow",
          }
        ]
      },
      // Data Page 3
      "page3": {

        "items": [
          {
            "id": 1,
            "title": "Jessica Miles",
            "image": "assets/imgs/avatar/15.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 2,
            "title": "Natasha Gamble",
            "image": "assets/imgs/avatar/16.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 3,
            "title": "Natasha Gamble",
            "image": "assets/imgs/avatar/17.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 4,
            "title": "Marisa Cain",
            "image": "assets/imgs/avatar/18.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 5,
            "title": "Stafford Carrillo",
            "image": "assets/imgs/avatar/19.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 6,
            "title": "Julia Petersen",
            "image": "assets/imgs/avatar/20.jpg",
            "ionButton": "Unfollow",
          },
          {
            "id": 7,
            "title": "Gabriela Reyes",
            "image": "assets/imgs/avatar/21.jpg",
            "ionButton": "Unfollow",
          },
        ]
      },
    };
  }



  //* Data Set for page 4
  getDataForLayout4 = (): any => {
    return {
      "toolbarTitle": "News",
      "headerImage": "assets/imgs/background/25.jpg",
      "title": "Infinit bridge in China.",
      "subtitle": "Infinit bridge",
      "shareIcon": "ios-more",
      "items": [
        {
          "id": 1,
          "image": "assets/imgs/background/11.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 2,
          "image": "assets/imgs/background/10.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 3,
          "image": "assets/imgs/background/32.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 4,
          "image": "assets/imgs/background/38.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 5,
          "image": "assets/imgs/background/34.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 6,
          "image": "assets/imgs/background/30.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 7,
          "image": "assets/imgs/background/29.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        },
        {
          "id": 8,
          "image": "assets/imgs/background/31.jpg",
          "title": "Infinit bridge made in China.",
          "description": "Passages, and more recently"
        }
      ]
    };
  }

  load(item: any): Observable<any> {
    this.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('parallax/' + item.theme)
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

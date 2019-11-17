import { HomeService } from './home-service';
import { IntroService } from './intro-service';
import { MenuService } from './menu-service';
import { ListViewExpandableService } from './list-view-expandable-service';
import { ListViewSwipeToDismissService } from './list-view-swipe-to-dismiss-service';
import { ListViewGoogleCardsService } from './list-view-google-card-service';
import { ParallaxService } from './parallax-service';
import { ImageGalleryService } from './image-gallery-service';
import { ActionSheetService } from './action-sheet-service';
import { ProfileService } from './profile-service';
import { Injectable } from '@angular/core';

@Injectable()
export class ExportService{
    export() {
        return {
            'actionSheet': this.getActionSheet(),
            'menu':this.getMenu(),
            'home': this.getHome(),
            'imageGallery': this.getImageGallery(),
            'intro': this.getIntro(),
            'listView': {
                'expandable':this.getListViewExpandable(),
                'googleCards':this.getListViewGoogleCards(),
                'swipeToDismiss':this.getListViewSwipeToDismiss()
            },
            'parallax':this.getParallax(),
            'profile':this.getProfile(),
        }
    }

    getListViewExpandable() {
        let service = new ListViewExpandableService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getListViewSwipeToDismiss() {
        let service = new ListViewSwipeToDismissService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getListViewGoogleCards() {
        let service = new ListViewGoogleCardsService(null, null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getParallax() {
        let service = new ParallaxService(null, null);
        return {
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
        }
    }

    getImageGallery() {
        let service = new ImageGalleryService(null, null);
        return {
            'layout2': service.getDataForLayout2(),
        }
    }


    getActionSheet() {
        let service = new ActionSheetService(null, null);
        return {
            'layout1': service.getDataForLayout1(),
            'layout2': service.getDataForLayout2(),
            'layout3': service.getDataForLayout3(),
        }
    }

    getProfile() {
        let service = new ProfileService(null, null, null);
        return {
            'layout3': service.getDataForLayout3(),
            'layout4': service.getDataForLayout4(),
            'layout5': service.getDataForLayout5(),
        }
    }

    getMenu() {
        let service = new MenuService(null, null);
        return service.getDataForTheme(null)
    }
    
    getIntro() {
        let service = new IntroService(null, null);
        return service.getData()
    }

    getHome() {
        let service = new HomeService(null);
        return service.getData()
    }

    
}
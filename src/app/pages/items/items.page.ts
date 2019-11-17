import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/HttpService';
import { ValidationService } from '../../services/validation';
import { MailChimpService } from '../../services/mail-chimp-service';

import { IService } from '../../services/IService';

import { HomeService } from '../../services/home-service';
import { ParallaxService } from '../../services/parallax-service';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { ActionSheetService } from '../../services/action-sheet-service';
import { ProfileService } from '../../services/profile-service';
import { AppSettings } from './../../services/app-settings';

@Component({
    templateUrl: 'items.html',
    providers: [
        MailChimpService,
        ParallaxService,
        HomeService, ImageGalleryService,
        HttpService, ValidationService,
        ActionSheetService,
        ProfileService]
})
export class ItemsPage {
    title: string;
    componentName: string;
    pages: any = {};
    listServices: { [key: string]: IService; } = {};
    service: IService;

    // services: array
    constructor(public navCtrl: NavController,
        private imageGalleryService: ImageGalleryService,
        private parallaxService: ParallaxService,
        private homeService: HomeService,
        private httpService: HttpService,
        private validationService: ValidationService,
        private mailChimpService: MailChimpService,
        private actionSheetService: ActionSheetService,
        private profileService: ProfileService,
        private route: ActivatedRoute) {

        this.listServices = {
            'imageGallery': this.imageGalleryService,
            'parallax': this.parallaxService,
            'profile': this.profileService,
            'actionSheet': this.actionSheetService,
        };

        this.componentName = this.route.snapshot.paramMap.get('type');
        this.service = this.listServices[this.componentName];

        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
        }
    }

    openPage(page: any) {
        if (AppSettings.SUBSCRIBE) {
          if (!this.mailChimpService.showMailChimpForm()) {
            //`this.showPrompt();
            this.mailChimpService.setMailChimpForm(true);
          } else {
            this.navCtrl.navigateForward([page.url], {});
          }
        } else {
            this.navCtrl.navigateForward([page.url], {});
        }
    }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'item-details-search-bar.page.html',
    styleUrls: ['item-details-search-bar.page.scss'],
})
export class ItemDetailsSearchBarPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }

    // events
    onItemClick(params): void {
        this.toastCtrl.presentToast('onItemClick:' + JSON.stringify(params));
    }

    onTextChange(text): void {
        this.toastCtrl.presentToast('onTextChange:' + text);
    }
}

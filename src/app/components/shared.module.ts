import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ParallaxHeader } from './parallax/parallax-header';
import { AgmCoreModule } from '@agm/core';

import { ParallaxLayout2Page } from './parallax/parallax-layout-2/parallax-layout-2.page';
import { ParallaxLayout3Page } from './parallax/parallax-layout-3/parallax-layout-3.page';
import { ParallaxLayout4Page } from './parallax/parallax-layout-4/parallax-layout-4.page';

import { ProfileLayout3Page } from './profile/profile-layout-3/profile-layout-3.page';
import { ProfileLayout4Page } from './profile/profile-layout-4/profile-layout-4.page';
import { ProfileLayout5Page } from './profile/profile-layout-5/profile-layout-5.page';

import { ActionSheetLayout1Page } from './action-sheet/action-sheet-layout-1/action-sheet-layout-1.page';
import { ActionSheetLayout2Page } from './action-sheet/action-sheet-layout-2/action-sheet-layout-2.page';
import { ActionSheetLayout3Page } from './action-sheet/action-sheet-layout-3/action-sheet-layout-3.page';

import { ExpandableListLayout1Page } from './expandable-list/expandable-list-layout-1/expandable-list-layout-1.page';
import { ExpandableListLayout2Page } from './expandable-list/expandable-list-layout-2/expandable-list-layout-2.page';
import { ExpandableListLayout3Page } from './expandable-list/expandable-list-layout-3/expandable-list-layout-3.page';

import { SwipeToDismissListLayout1Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-1/swipe-to-dismiss-list-layout-1.page';
import { SwipeToDismissListLayout2Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-2/swipe-to-dismiss-list-layout-2.page';
import { SwipeToDismissListLayout3Page } from './swipe-to-dismiss-list/swipe-to-dismiss-list-layout-3/swipe-to-dismiss-list-layout-3.page';

import { ImageGalleryLayout1Page } from './image-gallery/image-gallery-layout-1/image-gallery-layout-1.page';
import { ImageGalleryLayout2Page } from './image-gallery/image-gallery-layout-2/image-gallery-layout-2.page';
import { ImageGalleryLayout3Page } from './image-gallery/image-gallery-layout-3/image-gallery-layout-3.page';

import { FullImageGalleryLayout1Page } from './full-image-gallery/full-image-gallery-layout-1/full-image-gallery-layout-1.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgmCoreModule.forRoot({ apiKey: '' })
  ],
  declarations: [
    ParallaxHeader,
    ParallaxLayout2Page, ParallaxLayout3Page, ParallaxLayout4Page,
    ProfileLayout3Page, ProfileLayout4Page, ProfileLayout5Page,
    ActionSheetLayout1Page, ActionSheetLayout2Page, ActionSheetLayout3Page,
    ExpandableListLayout1Page, ExpandableListLayout2Page, ExpandableListLayout3Page,
    SwipeToDismissListLayout1Page, SwipeToDismissListLayout2Page, SwipeToDismissListLayout3Page,
    ImageGalleryLayout1Page, ImageGalleryLayout2Page, ImageGalleryLayout3Page,
    FullImageGalleryLayout1Page
  ],
  exports: [ ParallaxHeader,
    ParallaxLayout2Page, ParallaxLayout3Page, ParallaxLayout4Page,
    ProfileLayout3Page, ProfileLayout4Page, ProfileLayout5Page,
    ActionSheetLayout1Page, ActionSheetLayout2Page, ActionSheetLayout3Page,
    ExpandableListLayout1Page, ExpandableListLayout2Page, ExpandableListLayout3Page,
    SwipeToDismissListLayout1Page, SwipeToDismissListLayout2Page, SwipeToDismissListLayout3Page,
    ImageGalleryLayout1Page, ImageGalleryLayout2Page, ImageGalleryLayout3Page,
    FullImageGalleryLayout1Page
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

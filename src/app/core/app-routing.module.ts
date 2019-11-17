import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: '../pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: '../pages/list/list.module#ListPageModule'
  },
  {
    path: 'items/:type',
    loadChildren: '../pages/items/items.module#ItemsPageModule'
  },
  {
    path: 'subitems/:type',
    loadChildren: '../pages/sub-items/sub-items.module#SubItemsPageModule'
  },
  {
    path: 'search-bars/:type',
    loadChildren: '../pages/item-details-search-bar/item-details-search-bar.module#ItemDetailsSearchBarPageModule'
  },
  {
    path: 'parallax/:type',
    loadChildren: '../pages/item-details-parallax/item-details-parallax.module#ItemDetailsParallaxPageModule'
  },
  {
    path: 'profile/:type',
    loadChildren: '../pages/item-details-profile/item-details-profile.module#ItemDetailsProfilePageModule'
  },
  {
    path: 'action-sheet/:type',
    loadChildren: '../pages/item-details-action-sheet/item-details-action-sheet.module#ItemDetailsActionSheetPageModule'
  },
  {
    path: 'expandable/:type',
    loadChildren: '../pages/item-details-expandable/item-details-expandable.module#ItemDetailsExpandablePageModule'
  },
  {
    path: 'google-card/:type',
    loadChildren: '../pages/item-details-google-card/item-details-google-card.module#ItemDetailsGoogleCardPageModule'
  },
  {
    path: 'swipe-to-dismiss/:type',
    loadChildren: '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module#ItemDetailsSwipeToDismissPageModule'
  },
  {
    path: 'image-gallery/:type',
    loadChildren: '../pages/item-details-image-gallery/item-details-image-gallery.module#ItemDetailsImageGalleryPageModule'
  },
  {
    path: 'image-gallery-subgallery',
    loadChildren: '../pages/item-details-image-subgallery/item-details-image-subgallery.module#ItemDetailsImageSubGalleryPageModule'
  },
  {
    path: 'full-image-gallery',
    loadChildren: '../pages/item-details-full-image-gallery/item-details-full-image-gallery.module#ItemDetailsFullImageGalleryPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

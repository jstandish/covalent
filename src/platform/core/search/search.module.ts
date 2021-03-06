import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdInputModule, MdIconModule, MdButtonModule } from '@angular/material';

import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';

export { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchInputComponent } from './search-input/search-input.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
  ],
  declarations: [
    TdSearchInputComponent,
    TdSearchBoxComponent,
  ],
  exports: [
    TdSearchInputComponent,
    TdSearchBoxComponent,
  ],
})
export class CovalentSearchModule {
  /**
   * @deprecated in 1.0.0-beta.3
   *
   * Please use without calling forRoot()
   */
  static forRoot(): ModuleWithProviders {
    /* tslint:disable-next-line */
    console.warn('forRoot() has been deprecated in CovalentSearchModule');
    return {
      ngModule: CovalentSearchModule,
      providers: [ ],
    };
  }
}

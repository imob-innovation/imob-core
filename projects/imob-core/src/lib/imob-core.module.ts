import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { AtlasImobTableComponent } from './atlas-imob-table/atlas-imob-table.component';

@NgModule({
  declarations: [AtlasImobTableComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzRadioModule,
    NzSpaceModule,
  ],
  exports: [AtlasImobTableComponent],
})
export class ImobCoreModule {}

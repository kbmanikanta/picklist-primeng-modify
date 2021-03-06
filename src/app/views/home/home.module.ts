import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown'
import { TooltipModule } from 'primeng/tooltip';

import { MultiPickListComponent } from '../../shared/components/multi-picklist/multi-picklist.component';
import { PrimengTableComponent } from '../../shared/components/primeng-table/primeng-table.component';

import { TableSlantedHeaderComponent } from './table/table-slanted-header/table-slanted-header.component';
import { PicklistList2Component } from './picklist/picklist-list2/picklist-list2.component';
import { PicklistList3Component } from './picklist/picklist-list3/picklist-list3.component';
import { TableSlantedSortComponent } from './table/table-slanted-sort/table-slanted-sort.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PickListModule,
    TableModule,
    DropdownModule,
    TooltipModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
  	HomeComponent,
  	TableSlantedHeaderComponent,
  	PicklistList2Component,
  	PicklistList3Component,
  	TableSlantedSortComponent, 
    MultiPickListComponent,
    PrimengTableComponent
  ]
})
export class HomeModule { }

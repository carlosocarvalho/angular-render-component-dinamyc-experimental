import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandRegistryComponent } from './demand-registry.component';

@NgModule({
  declarations: [DemandRegistryComponent],
  imports: [
    CommonModule
  ],
  exports: [DemandRegistryComponent],
  entryComponents: [DemandRegistryComponent]
})
export class DemandRegistryModule { }

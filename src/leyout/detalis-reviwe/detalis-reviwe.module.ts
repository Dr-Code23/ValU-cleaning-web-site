import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalisReviweRoutingModule } from './detalis-reviwe-routing.module';
import { DetalisreviweComponent } from './detalisreviwe/detalisreviwe.component';


@NgModule({
  declarations: [
    DetalisreviweComponent
  ],
  imports: [
    CommonModule,
    DetalisReviweRoutingModule
  ]
})
export class DetalisReviweModule { }

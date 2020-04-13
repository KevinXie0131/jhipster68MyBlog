import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipster68MyBlogSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [Jhipster68MyBlogSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipster68MyBlogSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [Jhipster68MyBlogSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}

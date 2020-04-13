import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster68MyBlogSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipster68MyBlogSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jhipster68MyBlogHomeModule {}

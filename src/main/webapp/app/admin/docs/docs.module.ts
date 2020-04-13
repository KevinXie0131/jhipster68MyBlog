import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jhipster68MyBlogSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [Jhipster68MyBlogSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}

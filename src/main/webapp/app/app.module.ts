import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleApplication2222SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplication2222AppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplication2222HomeModule } from './home/home.module';
import { JhipsterSampleApplication2222AdminModule } from './admin/admin.module';
import { JhipsterSampleApplication2222AccountModule } from './account/account.module';
import { JhipsterSampleApplication2222EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplication2222AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplication2222SharedModule,
        JhipsterSampleApplication2222HomeModule,
        JhipsterSampleApplication2222AdminModule,
        JhipsterSampleApplication2222AccountModule,
        JhipsterSampleApplication2222EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplication2222AppModule {}

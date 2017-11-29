import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplication2222RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterSampleApplication2222CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterSampleApplication2222LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterSampleApplication2222DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterSampleApplication2222TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterSampleApplication2222EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterSampleApplication2222JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterSampleApplication2222JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleApplication2222RegionMySuffixModule,
        JhipsterSampleApplication2222CountryMySuffixModule,
        JhipsterSampleApplication2222LocationMySuffixModule,
        JhipsterSampleApplication2222DepartmentMySuffixModule,
        JhipsterSampleApplication2222TaskMySuffixModule,
        JhipsterSampleApplication2222EmployeeMySuffixModule,
        JhipsterSampleApplication2222JobMySuffixModule,
        JhipsterSampleApplication2222JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplication2222EntityModule {}

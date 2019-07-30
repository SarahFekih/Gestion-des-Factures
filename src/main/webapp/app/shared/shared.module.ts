import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GestionfacturesSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GestionfacturesSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GestionfacturesSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionfacturesSharedModule {
  static forRoot() {
    return {
      ngModule: GestionfacturesSharedModule
    };
  }
}

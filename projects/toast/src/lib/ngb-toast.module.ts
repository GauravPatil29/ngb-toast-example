import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgbToastComponent } from './component/ngb-toast-component';
import { NgbToastContainer } from './pages/ngb-toast-container';
import { NgbToastService } from './provider/ngb-toast.service';

@NgModule({
    declarations: [
        NgbToastContainer,
        NgbToastComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [NgbToastService],
    exports: [
        NgbToastContainer,
    ],
})
export class NgbToastModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgbToastModule,
            providers: [NgbToastService]
        };
    }
}

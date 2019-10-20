import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule as Ng2Charts } from "ng2-charts";

import { ChartsRoutingModule } from "./charts-routing.module";
import { ChartsComponent } from "./charts.component";
import { PageHeaderModule } from "../../shared";
import { AgmCoreModule } from "@agm/core";
@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        ChartsRoutingModule,
        PageHeaderModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyBJd_a7VRzBcqrs792SX1dEbfhQlVp9Sdw"
        })
    ],
    declarations: [ChartsComponent]
})
export class ChartsModule {}

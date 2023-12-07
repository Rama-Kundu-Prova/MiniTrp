import { Component, OnInit } from '@angular/core';
import { EdcaUrlSerializer, EndecapodService} from '@ibfd/endecapod';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MiniTrp';


  constructor(
    private endecapodService: EndecapodService,
    private urlSerializer: EdcaUrlSerializer
  ) {
    this.loadInitQuery();
  
  }


  ngOnInit(): void {
    
  }

  loadInitQuery(): void {
    this.endecapodService.setName('EndecaService');
    this.endecapodService.setURL("/endecapod", "/endecapod/my");
    this.endecapodService.setSubscriptionAwareness(true);
    this.endecapodService.RegisterParams(this.urlSerializer.parse(`?Ns=sort_date_common|1&N=3+10&Ne=7487&Nu=global_rollup_key&Np=2`).queryParamMap);


  }
}

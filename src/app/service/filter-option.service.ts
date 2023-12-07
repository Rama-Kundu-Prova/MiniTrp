

import { Injectable } from '@angular/core';
import { EdcaUrlSerializer, EndecapodService, SearchResult } from '@ibfd/endecapod';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { Option } from '../option';

@Injectable()
export class FilterExposeService extends EndecapodService { }

@Injectable({
  providedIn: 'root'
})
export class FilterOptionService implements OnInit {
  

  

  constructor(
    private endecapodService: EndecapodService,
    private filterExposeService: FilterExposeService,
    private urlSerializer: EdcaUrlSerializer

  ) {
    this.endecapodService.setName('endecapodService');
    this.endecapodService.setURL("/endecapod", "/endecapod/my");
    this.endecapodService.RegisterParams(this.urlSerializer.parse("N=0&Ns=sort_date_common|1&Nr=AND(3,10)&Ne=7487&Nu=global_rollup_key&Np=2").queryParamMap);
    
  }

  ngOnInit(): void {
    
  }


  getValues(id: any): Observable<Option>{
console.log(" get val ");
debugger

    this.filterExposeService.setName(id + '-ExposeService');
    this.filterExposeService.Copy(this.endecapodService);
    this.filterExposeService.setDym(false);
    this.filterExposeService.SetNe([id]);
    return this.filterExposeService.Query()
      .pipe(
        filter(f => !!f),
        map(r => new SearchResult(r)),
        take(1),
        map((res: SearchResult) => this.toOption(res, id))
      );


  }

  private toOption(res: SearchResult, id: any): Option {

    
      return <Option>{
        values: res.getDimension(id) && res.getDimension(id).values ? res.getDimension(id).values : []
      };
    }


  

}

   
 


  


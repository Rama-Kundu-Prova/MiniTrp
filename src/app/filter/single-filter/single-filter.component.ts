import { Component, OnInit } from '@angular/core';
import { FilterOptionService } from 'src/app/service/filter-option.service';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-single-filter',
  templateUrl: './single-filter.component.html',
  styleUrls: ['./single-filter.component.css']
})
export class SingleFilterComponent {


  constructor(private service: FilterOptionService){

  }

  collection: any;


  ngOnInit() {


    this.service.getValues(7487).subscribe((v: any) => {
      console.log("vllge naaaaaaa");

      console.log(v);
      debugger

      this.collection = v.values.map((item: any) => {
        return {
          "name": item.name,
          "id": item.id
        };
      }

      


      );

      

    });
  }






}

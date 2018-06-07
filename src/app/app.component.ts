import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  private apiURL = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Acolos?api_key=RGAPI-10b19e19-accf-4a4e-8739-f67e2287d4e3';
  data: any = {};

  constructor(private http: Http) {
    this.getData();
    this.getSummonerInfo();
  }

  getData() {
    return this.http.get(this.apiURL).map((res: Response) => res.json());
  }

  getSummonerInfo() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

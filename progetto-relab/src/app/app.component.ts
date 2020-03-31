import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto-relab';

  color = 'red';
  rColor = 'red';

  lat: number = 45.506738;
  lng: number = 9.190766;

  lat2: number = 45.610137939453125;
  lng2: number = 8.853277206420898;

  private icon0 =  {
    url:'./assets/images/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  private icon1 =  {
    url:'./assets/images/icon1.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  private icon2 =  {
    url:'./assets/images/icon2.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };

  private icon3 =  {
    url:'./assets/images/icon3.ico',
    scaledSize: {
      width: 240,
      height: 240
    }
  };

  triangle: Array<point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

  rectangle: Array<point> =
  [
    {lng:9.3, lat:45.9},
    {lng:9.6, lat:45.9},
    {lng:9.6, lat:45.12},
    {lng:9.3, lat:45.12}
  ]


  setRed(): boolean {
    this.color = 'red';
    return true;
  }

  setYellow(): boolean {
    this.color = 'yellow';
    return true;
  }

  setGreen(): boolean {
    this.color = 'green';
    return true;
  }

  setRRed(): boolean {
    this.rColor = 'red';
    return true;
  }

  setRYellow(): boolean {
    this.rColor = 'yellow';
    return true;
  }

  setRGreen(): boolean {
    this.rColor = 'green';
    return true;
  }

}

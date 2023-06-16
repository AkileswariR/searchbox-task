import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
searchQuery: string = '';
  currentTime: any;
  errorMessage: string = '';
   loading: boolean = false;
  

  API_KEY = '5pcNU+IpxonYH0nDraf+UA==K73YMK1gy8pT8CHr';


  constructor(private http: HttpClient) { }






  searchTimezone() {

     if (!this.searchQuery) {
       window.alert('Please enter a city name');
       this.errorMessage = 'Please enter a city name';
       return;
    }
      this.loading = true;
    const url = `https://api.api-ninjas.com/v1/worldtime?city=${this.searchQuery}`;
    const headers = {
      'X-Api-Key': this.API_KEY
    };

    this.http.get<any>(url, { headers }).subscribe(
      response => {
        this.currentTime = response;
         this.loading = false;
        
      },
      error => {
        console.error('Error occurred while fetching the timezone:', error);
        window.alert('Enter the valid city name');
        this.errorMessage = 'Enter the city name correctly.';
         this.loading = false;
      }
    );
  }

 
   refreshPage() {
    // location.reload();
       this.currentTime = null;
    this.errorMessage = '';
  }
}



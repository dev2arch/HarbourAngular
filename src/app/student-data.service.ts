import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentDataService {

  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
      console.log(data.data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/student.json').map(
      (response: Response) => {
        const data = response.json();
        return data[2];
      }
    );
  }
  public postStudentData(data) {
    console.log(data)
    const header = new Headers({'Content-Type' : 'application/json'})
    return this.http.post('https://harbourapi-c4f39.firebaseio.com/students.json', data,{ headers: header});
  }
  public getStudentData(){
    return this.http.get("https://harbourapi-c4f39.firebaseio.com/students.json")
  }
}

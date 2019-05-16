import { Component, OnInit } from '@angular/core';
import { StudentDataService} from '../student-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  StudentsData: any;

  constructor(public studentDataService: StudentDataService) { }

  ngOnInit() {
    this.studentDataService.getStudentData()
      .subscribe(
        (res) => {
          const data = res.json();
          this.StudentsData = Object.values(data);
          console.log(this.StudentsData);
        },
        (err) => console.log(err)
        )

  }

}

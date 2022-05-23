import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-stu',
  templateUrl: './add-edit-stu.component.html',
  styleUrls: ['./add-edit-stu.component.css']
})
export class AddEditStuComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() stu:any;
  StudentId:string;
  StudentName:string;
  Department:string;
  DateOfBirth:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.StudentId=this.stu.StudentId;
      this.StudentName=this.stu.StudentName;
      this.Department=this.stu.Department;
      this.DateOfBirth=this.stu.DateOfBirth;
      this.PhotoFileName=this.stu.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addStudent(){
    var val = {StudentId:this.StudentId,
                StudentName:this.StudentName,
                Department:this.Department,
              DateOfBirth:this.DateOfBirth,
            PhotoFileName:this.PhotoFileName};

    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateStudent(){
    var val = {StudentId:this.StudentId,
      StudentName:this.StudentName,
      Department:this.Department,
    DateOfBirth:this.DateOfBirth,
  PhotoFileName:this.PhotoFileName};

    this.service.updateStudent(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  

}
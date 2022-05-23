import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-stu',
  templateUrl: './show-stu.component.html',
  styleUrls: ['./show-stu.component.css']
})
export class ShowStuComponent implements OnInit {

  constructor(private service:SharedService) { }

  StudentList:any=[];

  ModalTitle:string;
  ActivateAddEditStuComp:boolean=false;
  stu:any;

  ngOnInit(): void {
    this.refreshStuList();
  }

  addClick(){
    this.stu={
      StudentId:0,
      StudentName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Student";
    this.ActivateAddEditStuComp=true;

  }

  editClick(item){
    console.log(item);
    this.stu=item;
    this.ModalTitle="Edit Student";
    this.ActivateAddEditStuComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteStudent(item.StudentId).subscribe(data=>{
        alert(data.toString());
        this.refreshStuList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditStuComp=false;
    this.refreshStuList();
  }


  refreshStuList(){
    this.service.getStuList().subscribe(data=>{
      this.StudentList=data;
    });
  }

}
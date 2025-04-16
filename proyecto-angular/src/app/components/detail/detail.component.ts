import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.project = {
      _id: '',
      name: '',
      description: '',
      category: '',
      year: 0,
      langs: '',
      image: ''
    };
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);
    }); 
  }

  getProject(id: string) {
    this._projectService.getProject(id).subscribe(
      Response=>{
        this.project = Response.project;
      },
      error =>{
        console.log(<any>error);
      }

    )
  }

  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}

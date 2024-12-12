import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../model/projects.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddProjectComponent } from '../../components/dialog-add-project/dialog-add-project.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tms-home-test',
  templateUrl: './tms-home-test.component.html',
  styleUrl: './tms-home-test.component.scss'
})
export class TmsHomeTestComponent {

  isLoading: any;
  newProjects: any;
  onProgressProjects: any;
  completeProjects: any;
  constructor(private projectService: ProjectsService, public dialog: MatDialog, private toastr: ToastrService) {
    this.isLoading = true;

    this.projectService.getAllProjects().subscribe((res: Projects[]) => {
      this.newProjects = res.filter((item: any) => {
        return item.stato == "NUOVO"
      })

      this.onProgressProjects = res.filter((item: any) => {
        return item.stato == "PROGRESS"
      })

      this.completeProjects = res.filter((item: any) => {
        return item.stato == "COMPLETATO"
      })
      console.log(this.newProjects)
      console.log(this.onProgressProjects)
      console.log(this.completeProjects)
    })
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }



  deleteProject(id: any) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.toastr.success('PROJECT DELETED COMPLETELY');
      this.reloadProjects();
    })
  }

  getFirstLetterOfNameAndSurname(completeName: any) {
    let nameParts = completeName.split(" ");
    let firstName = nameParts[0];
    let firstNameChar = firstName.charAt(0);
    if (nameParts.length > 1) {

      let lastName = nameParts[nameParts.length - 1];
      let lastNameChar = lastName.charAt(0);
      return firstNameChar + lastNameChar
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogAddProjectComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result !== 'undefined') {
        let newProject = {
          title: result.value.title,
          description: result.value.description,
          user: result.value.user,
          stato: "NUOVO"
        }
        this.addNewProject(newProject);
      }
    });
  }

  addNewProject(result:any) {
    this.projectService.addNewProject(result).subscribe((res: any) => {
      this.toastr.success('PROJECT ADDED COMPLETELY');
      this.reloadProjects();
    });
  }

  editProject(result:any) {
    console.log(result)
    this.projectService.editProject(result).subscribe((res: any) => {
      this.toastr.success('PROJECT MODIFIED COMPLETELY');
      this.reloadProjects();
    });
    console.log(result)
  }
  
  reloadProjects() {
    this.newProjects = [];
    this.completeProjects = [];
    this.onProgressProjects = [];
    this.projectService.getAllProjects().subscribe((res: Projects[]) => {
      this.newProjects = res.filter((item: any) => {
        return item.stato == "NUOVO"
      })

      this.onProgressProjects = res.filter((item: any) => {
        return item.stato == "PROGRESS"
      })

      this.completeProjects = res.filter((item: any) => {
        return item.stato == "COMPLETATO"
      })
      console.log(this.newProjects)
      console.log(this.onProgressProjects)
      console.log(this.completeProjects)
    })
  }
}

import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-edit-project',
  templateUrl: './dialog-edit-project.component.html',
  styleUrl: './dialog-edit-project.component.scss'
})
export class DialogEditProjectComponent {
  editProject: any;
  statusProject:any
  constructor(public dialogRef: MatDialogRef<DialogEditProjectComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editProject = new FormGroup({
      id: new FormControl(this.data.id),
      title: new FormControl(this.data.title),
      description: new FormControl(this.data.description),
      user: new FormControl(this.data.user),
      stato: new FormControl(this.data.stato),
    });

    this.statusProject = [
      { value: 'NUOVO' },
      { value: 'PROGRESS', },
      { value: 'COMPLETATO' }];
  }

  ngOnInit() {
    console.log(this.data)
  }

  
  edit(project:any): void {
    console.log(project)
    this.dialogRef.close(project);
  }
}

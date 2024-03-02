import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[] = [];
  nombreTarea: string = '';


  agregarTarea() {
    if (!this.nombreTarea.trim()) return;

    console.log(this.nombreTarea);
  }

}

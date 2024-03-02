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


  agregarTarea(): void {
    if (!this.nombreTarea.trim()) return;

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listaTareas[index].estado = !tarea.estado;
  }
}

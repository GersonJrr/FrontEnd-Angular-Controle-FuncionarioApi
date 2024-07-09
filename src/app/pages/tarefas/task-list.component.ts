import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/TarefaService/tarefa.service';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  taskForm: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: [''],
      description: [''],
      deadline: [''],
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        name: this.taskForm.get('name')?.value,
        description: this.taskForm.get('description')?.value,
        deadline: this.taskForm.get('deadline')?.value,
        isCompleted: false,
        
      };
      this.taskService.createTask(newTask).subscribe(task => {
        this.tasks.push(task);
        this.taskForm.reset();
      });
    }
  }

  markAsCompleted(task: Task): void {
    task.isCompleted = !task.isCompleted;
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id!).subscribe(() => {
      this.tasks = this.tasks.filter(t => t !== task);
    });
  }
}

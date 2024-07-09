import { TestBed } from '@angular/core/testing';

import { TaskService } from './tarefa.service';

describe('TarefaService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

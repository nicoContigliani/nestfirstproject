import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }
  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.tasksService.getTask(parseInt(taskId));
  }

  @Post()
  createTasks(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'create Tasks';
  }
  @Delete(':id')
  deleteTasks(@Param('id') id): string {
    console.log(id);

    return `delete any date ${id} `;
  }
  @Put(':id')
  updateTasks(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(`update tasks ${task}, ${id}`);
    return `update tasks ${task}, ${id}`;
  }
}

export class CreateTaskDto {
  status?: 'done' | 'pending';
  description: string;
}

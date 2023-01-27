import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectsRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<any> {
    return this.projectsRepository.save(createProjectDto);
  }

  async findAll(): Promise<any> {
    return this.projectsRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return this.projectsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<any> {
    return this.projectsRepository.update(id, updateProjectDto);
  }

  async remove(id: number): Promise<any> {
    return this.projectsRepository.delete(id);
  }
}

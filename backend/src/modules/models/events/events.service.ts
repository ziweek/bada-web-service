import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<any> {
    return this.eventsRepository.save(createEventDto);
  }

  async findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<any> {
    return this.eventsRepository.update(id, updateEventDto);
  }

  async remove(id: number): Promise<any> {
    return this.eventsRepository.delete(id);
  }
}

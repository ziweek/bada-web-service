import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profilesRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<any> {
    return this.profilesRepository.save(createProfileDto);
  }

  async findAll(): Promise<any> {
    return this.profilesRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return this.profilesRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<any> {
    return this.profilesRepository.update(id, updateProfileDto);
  }

  async remove(id: number): Promise<any> {
    return this.profilesRepository.delete(id);
  }
}

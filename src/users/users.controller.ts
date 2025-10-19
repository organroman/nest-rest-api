import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import type { CreateUser, UpdateUser } from 'src/types/users';

@Controller('users') // route users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() //   * GET  /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
    // return [];
  }

  @Get(':id') // GET  /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post() // * POST /users
  create(@Body() user: CreateUser) {
    return this.usersService.create(user);
  }

  @Patch(':id') //* PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: UpdateUser) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') //* DELETE /users/:id */
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}

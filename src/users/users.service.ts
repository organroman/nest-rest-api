import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '../types/users';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Leanne Graham', email: 'lg@mail.com', role: 'INTERN' },
    { id: 2, name: 'Ervin Howell', email: 'eh@mail.com', role: 'ENGINEER' },
    { id: 3, name: 'Clementine Bauch', email: 'cb@mail.com', role: 'ADMIN' },
    { id: 4, name: 'Jane Smith', email: 'js@mail.com', role: 'ENGINEER' },
    { id: 5, name: 'John Doe', email: 'jd@mail.com', role: 'ADMIN' },
    { id: 6, name: 'Loan Grall', email: 'lga@mail.com', role: 'INTERN' },
  ];

  findAll(role?: Role) {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (!rolesArray.length) {
        throw new NotFoundException('User role not found');
      }
      return rolesArray;
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}

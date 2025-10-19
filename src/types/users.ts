export type Role = 'ADMIN' | 'ENGINEER' | 'INTERN';

export type CreateUser = {
  name: string;
  email: string;
  role: Role;
};

export type UpdateUser = {
  id: number;
  name?: string;
  email?: string;
  role?: Role;
};

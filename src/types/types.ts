export type Role = 'ADMIN' | 'ENGINEER' | 'INTERN';

export type MyResponseObj = {
  statusCode: number;
  timestamp: string;
  path: string;
  response: string | object;
};

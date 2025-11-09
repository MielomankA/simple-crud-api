import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/types.js';

const users: User[] = [
  { id: uuidv4(), username: 'Ivan Pavlov', age: 30, hobbies: ['reading', 'gaming', 'soccer'] },
  { id: uuidv4(), username: 'Maria Polo', age: 25, hobbies: ['painting', 'cooking'] }
];

export const getAllUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 50);
  });
};

export const getUserById = async (id: string): Promise<User | null> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const user = users.find((user) => user.id === id) ?? null;
      resolve(user);
    }, 20)
  );
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = {
        ...user,
        id: uuidv4(),
      }

      users.push(newUser);
      resolve(newUser);
    }, 20);
  });
};

export const updateUser = async ({ id, username, age, hobbies }: User): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        resolve(null);
      } else {
        users[index] = { id, username, age, hobbies };
        resolve(users[index]);
      }
    }, 20);
  });
};

export const deleteUser = async (id: string): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        resolve(null);
      } else {
        users.splice(index, 1);
        resolve(users[index]);
      }
    }, 20);
  });
};

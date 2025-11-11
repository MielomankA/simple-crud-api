import { User } from '../types/types.js';

const users: User[] = [];

export const getAllUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

export const getUserById = async (id: string): Promise<User | null> => {
  return new Promise((resolve) => {
    const user = users.find((user) => user.id === id) ?? null;
    resolve(user);
  });
};

export const createUser = async (user: User): Promise<void> => {
    return new Promise((resolve) => {
      users.push(user);
      resolve();
    });
};

export const updateUser = async ({ id, username, age, hobbies }: User): Promise<User | null> => {
  return new Promise((resolve) => {
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      resolve(null);
    } else {
      users[index] = { id, username, age, hobbies };
      resolve(users[index]);
    }
  });
};

export const deleteUser = async (id: string): Promise<User | null> => {
  return new Promise((resolve) => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      resolve(null);
    } else {
      users.splice(index, 1);
      resolve(users[index]);
    }
  });
};

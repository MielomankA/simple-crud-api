import { User } from '../types/types.js';

const users: User[] = [];

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = async (id: string): Promise<User | null> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const user = users.find((user) => user.id === id) ?? null;
      resolve(user);
    }, 20)
  );
};

export const createUser = (user: User): void => {
    users.push(user);
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

import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

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

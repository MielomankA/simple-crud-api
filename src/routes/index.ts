import { Router } from 'express';
import { getRouter } from './get.js';
import { postRouter } from './post.js';

export const usersRouter = Router();

usersRouter.use(getRouter);
usersRouter.use(postRouter);

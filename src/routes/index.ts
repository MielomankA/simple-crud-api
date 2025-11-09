import { Router } from 'express';
import { getRouter } from './get.js';
import { postRouter } from './post.js';
import { putRouter } from './put.js';
import { deleteRouter } from './delete.js';

export const usersRouter = Router();

usersRouter.use(getRouter);
usersRouter.use(postRouter);
usersRouter.use(putRouter);
usersRouter.use(deleteRouter);

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Users from '../models/User';

class UserController {

  async store(req: Request, res: Response) {
    
    const repository = getRepository(Users);
    const { email, password } = req.body;

    const userExist = await repository.findOne({ where: { email } });

    if (userExist) {
      res.sendStatus(409);
    }

    const user = repository.create({ email, password });

    await repository.save(user);

    res.json(user);
  }

  index (req: Request, res: Response) {

  res.send('OK');
  }
}

export default new UserController();
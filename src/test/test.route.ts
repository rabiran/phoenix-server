import { Request, Response, NextFunction, Router } from 'express';

const test = Router();

test.use('/', (req: Request, res: Response)=>  {
    res.send("haha");
})

export default test;
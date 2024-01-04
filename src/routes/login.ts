import Router, { Request, Response } from 'express';
import { Responses } from '../responses';
import { UserService } from '../services/user';


const router = Router();

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    try
    {
        const response = await new UserService().login(req);
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(Responses.server_error)
    }
})

export const userRouter = router;
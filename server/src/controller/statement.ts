import { Request, Response } from 'express'
import Account from '../models/account';
import { resError } from '../models/response';
import StatementService from '../service/statement';

class Statement {


    public async handle(req: Request, res: Response) {
        try{
            res.send(await new StatementService(req.body).create())
        }
        catch(err){
            const _resError: resError = err as resError;
            if(_resError.code && _resError.code) res.status(_resError.code).send(_resError);
            else res.status(500).send("ERROR IN API")
        }
    }

}

export default Statement;
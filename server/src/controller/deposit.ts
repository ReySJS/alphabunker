import { Request, Response } from 'express'
import { resError } from '../models/response';
import DepositService from '../service/deposit';

class Deposit {
    constructor(){

    }

    public async handle(req: Request, res: Response) {
        try{
            res.send(await new DepositService(req.body).create())
        }
        catch(err){
            const _resError: resError = err as resError;
            if(_resError.code && _resError.code) res.status(_resError.code).send(_resError);
            else res.status(500).send("ERROR IN API")
        }
    }
}

export default Deposit;
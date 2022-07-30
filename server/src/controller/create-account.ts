import { Request, Response } from 'express'
import AccountInsertService from '../service/account/account-insert'
import { resError } from '../models/response'

class CreateAccount {

    public async handle(req: Request, res: Response) {
        try{
            res.send(await new AccountInsertService(req.body).create())
        }
        catch(err){
            const _resError: resError = err as resError;
            if(_resError.code && _resError.code) res.status(_resError.code).send(_resError);
            else res.status(500).send("ERROR IN API");
        }
    }
}

export default CreateAccount
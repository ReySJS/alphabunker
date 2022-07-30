import { Router } from "express"
import CreateAccount from "../controller/create-account";
import Deposit from "../controller/deposit";
import Transfer from "../controller/transfer";
import Withdrawals from "../controller/withdrawals";
import Statement from "../controller/statement";

const router = Router();

router.post("/account", new CreateAccount().handle.bind(new CreateAccount()));

router.post("/deposit", new Deposit().handle.bind(new Deposit()));

router.post("/withdrawals", new Withdrawals().handle.bind(new Withdrawals()));

router.post("/transfer", new Transfer().handle.bind(new Transfer()))

router.post("/statement", new Statement().handle.bind(new Statement()))

export default router
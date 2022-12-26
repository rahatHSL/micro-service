import { NextFunction, Request, Response, Router } from "express";
import { nameChangeAction } from "../Action/nameChangeAction";
const router = Router();
const ServiceController = {
  async nameChange(req: Request, res: Response, next: NextFunction) {
    const name = req.body.name;
    try {
      const response = await nameChangeAction.execute(name);
      return res.json(response);
    } catch (error) {
      next(error);
    }
  },
  register() {
    router.post("/name-change", this.nameChange);
    return router;
  },
};

export default ServiceController;

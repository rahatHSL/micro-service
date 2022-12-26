import { Request, Response, NextFunction, Router } from "express";
import { ServiceAction } from "../Action/ServiceAction";
const router = Router();
const ServiceController = {
  async nameSend(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.params.name;
      const response = await ServiceAction.execute(name);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  register() {
    router.get("/:name", this.nameSend);
    return router;
  },
};

export default ServiceController;

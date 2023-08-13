import { Router } from "express";
import groupeRoutes from "./group.route";

const apiRouter = Router();
apiRouter.use('/roulette', groupeRoutes);

export default apiRouter;
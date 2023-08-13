import { Router } from "express";
import Controller from "../controllers/group.controller";

const groupeRoutes = Router();
const controller = new Controller();

groupeRoutes.post('/a/fetch', controller.fetchAHandler);
groupeRoutes.post('/b/fetch', controller.fetchBHandler);

export default groupeRoutes;
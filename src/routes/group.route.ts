import { Router } from "express";
import Controller from "../controllers/group.controller";

const groupeRoutes = Router();
const controller = new Controller();

groupeRoutes.post('/group_a', controller.fetchAHandler);
groupeRoutes.post('/group_b', controller.fetchBHandler);

export default groupeRoutes;
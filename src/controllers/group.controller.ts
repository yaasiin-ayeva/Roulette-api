import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../utils/errorResponse.util";
import { aGroupService } from "../services/groupA.service";
import { bGroupService } from "../services/groupB.service";

export default class Controller {

    private readonly aService: aGroupService;
    private readonly bService: bGroupService;

    constructor() {
        this.aService = new aGroupService();
        this.bService = new bGroupService();
    }

    public fetchAHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.aService.find(req.body);
            return res.status(200).json({
                success: true,
                message: 'Data retrieved successfully',
                count: data.length,
                data: data
            });
        } catch (e) {
            next(new ErrorResponse(e.message, 500));
        }
    }

    public fetchBHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.bService.find(req.body);
            return res.status(200).json({
                success: true,
                message: 'Data retrieved successfully',
                count: data.length,
                data: data
            });
        } catch (e) {
            next(new ErrorResponse(e.message, 500));
        }
    }
}
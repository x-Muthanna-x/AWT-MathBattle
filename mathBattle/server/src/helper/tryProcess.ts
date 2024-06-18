import { Response,Request } from "express";

export async function tryProcess(req: Request , res:Response , process : (req: Request , res:Response) => Promise<any>) {
    try {
      await process(req,res);
    } catch (error: any) {
      console.error(error);
  
      res.status(400).json({
        success: false,
        message: error.message.toString(),
      });
    }
  }
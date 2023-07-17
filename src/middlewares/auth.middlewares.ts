import { Request, Response, NextFunction } from "express"
import * as jwt from "jsonwebtoken"

export async function authMiddlewares(req : Request | any, res : Response, next : NextFunction){
    try{
        const {authorization} = req.headers;

        if(!authorization){
            return res.status(401).json({
                message : "authorization failed",
                data : null
            })
        }
        const secretKey = process.env.SECRET_KEY as string
        let token = authorization
        const userLogged = jwt.verify(token, secretKey)
        
        req.user = userLogged;

        next();
    }
    catch(Error : any){
        console.log(Error)

        return res.status(500).json({
            message : Error.message,
            data : null
        })
    }
}
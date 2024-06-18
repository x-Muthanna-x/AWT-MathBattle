import { Request, Response } from "express";
import { UserModel } from "../database/users/UserModel";
import jwt from 'jsonwebtoken';
import { hashPassword } from "./hashing";



export async function loginUser(req: Request, res: Response) {
    try {
        // ** Get The User Data From Body ;
        const user = req.body;

        // ** destructure the information from user;
        const { username, password } = user;

        // ** Check the (email/user) exist  in database or not ;
        const userFromDb = await UserModel.findOne({
            username: username,
        });

        // ** if there is not any user we will send user not found;
        if (!userFromDb) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
            });
            return;
        }

        // ** if the (user) exist  in database we will check the password is valid or not ;
        // **  compare the password in db and the password sended in the request body

        const passwordIsCorrect =
           hashPassword(userFromDb?.password) === password;

        // ** if not matched send response that wrong password;

        if (!passwordIsCorrect) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "wrong password",
            });
            return;
        }

        // ** if the email and password is valid create a token

        /*
        To create a token JsonWebToken (JWT) receive's 3 parameter
        1. Payload -  This contains the claims or data you want to include in the token.
        2. Secret Key - A secure key known only to the server used for signing the token.
        3. expiration -  Additional settings like token expiration or algorithm selection.
        */

        // !! Don't Provide the secret openly, keep it in the .env file. I am Keeping Open just for demonstration

        // ** This is our JWT Token
        const token = jwt.sign(
            { _id: userFromDb?._id, username: userFromDb?.username },
            "YOUR_SECRET",
            {
                expiresIn: "1d",
            }
        );

        // send the response
        res.status(200).json({
            status: 200,
            success: true,
            message: "login success",
            token: token,
        });
    } catch (error: any) {
        // Send the error message to the client
        res.status(400).json({
            status: 400,
            message: error.message.toString(),
        });
    }
}
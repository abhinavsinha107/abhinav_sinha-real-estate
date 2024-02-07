import User from "../models/user.model";
import passport from "passport";
import passportStrategy from "passport-jwt";
import { IUser } from "../types";
let JwtStrategy = passportStrategy.Strategy;
let ExtractJwt = passportStrategy.ExtractJwt;

export const passportMiddleware = async (passport: any) => {
    console.log("Hello")
    passport.use(
        new JwtStrategy(
            {
                secretOrKey: process.env.JWT_SECRET_KEY || "",
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            },
            function (jwt_payload, cb) {
                // User.findOne({ userId: jwt_payload.userId }, function (err: any, user: IUser) {
                //     if (err) {
                //         return cb(err, false)
                //     }
                //     if (user) {
                //         return cb(undefined, user, jwt_payload)
                //     } else {
                //         return cb(undefined, false)
                //     }
                // })
                cb(null, false);
            }
        )
    )
}
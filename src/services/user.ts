import { Request } from "express";
import { Responses } from "../responses";
import { User } from "../database/user";
import { encryptionPassword } from "../utilities/bcrypt";

interface UserServiceProps {id?: object;}

export class UserService
{
    constructor() { }

    async login(req: Request): Promise<any> 
    {
        try 
        {
            const data: UserServiceProps = {};
            const response = Responses.success;
            const { email, password } = req.body;

            if(!email)    return Responses.email_required
            if(!password) return Responses.password_required

            const isUserExists = await User.findOne({email});

            if(isUserExists !== null)
            {
                const isValidPassword = encryptionPassword.compare_hash(password, isUserExists.password);

                if(!isValidPassword) return Responses.incorrect_password;
                
                data.id = isUserExists._id;

                return {...response, ...data};
            }
            else
            {
                const user = await new User({email, password}).save();
                data.id = user._id;
                return {...response, ...data};
            }
        } 
        catch(err) 
        {
            console.log(err);
            return {...Responses.server_error};
        }
    }

}
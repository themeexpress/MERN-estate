import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try{
        await newUser.save();
        res.status(201).json("User Created Successfully");
    } catch(error){
        next(error)
    }  
}
export default signup;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const User = require ('../model/userSchema');


router.get('/', (req, res) => {
    res.send('Hello World from server router js');
});

    // ============== Registeration Validation ===============

// using async await
router.post('/register', async (req, res) =>{
    const {name, email, phone, state, password, cpassword} = req.body;
    
    if (!name || !email || !phone || !state || !password || !cpassword){
        return res.status(422).json({error:"Please enter all the fields!"});
    }

    try{
        const emailExist = await User.findOne({email:email});
        const phoneExist = await User.findOne({phone:phone});

        if(emailExist){
            return res.status(422).json({error:"Email already exists!!"});
        }else if(phoneExist){
            return res.status(422).json({error:"Phone already exists!!"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password does not match!!"});
        }else{
            const user = new User({name, email, phone, state, password, cpassword});

            const userRegister = await user.save();
            console.log(userRegister);

            if(userRegister){
                res.status(201).json({message: 'user registered successfully'});
            }
        }
    }catch(err){
        console.log(err);
    }
});

// Using promises
// router.post('/register', (req, res) =>{
//     const {name, email, phone, work, password, cpassword} = req.body;
    
//     if (!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Enter all the fields!"});
//     }

//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exists!!"});
//         }
//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(() =>{
//             res.status(201).json({message: 'user registered successfully'});
//         }).catch((err) => {
//             res.status(500).json({error: 'Failed to register'})
//         });
//     }).catch(err => {console.log(err);});

//     res.json({message:req.body});
// });




// user login route
router.post('/signin', async(req, res) =>{
    try{
        const{email, password} = req.body;

        if(!email || !password){
            return res.status(422).json({error:"PLease fill the data"})
        }
        
        // ===== To check if user mail id exists or not  and password entered by user matches with id =======
        const userLogin = await User.findOne({email:email});
        if(!userLogin){
            res.json({message:"Invalid credentials!"});
        }else{
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // to store user id into cookies
            const token = await userLogin.generateAuthToken();          
            console.log(token);

            res.cookie("jwtoken", token,{
                expires: new Date(Date.now + 2589200000),
                httpOnly:true
            });


            if(!isMatch){
                res.status(400).json({error:"Invalid credential"});
            }else{
                res.json({message:"User Login Successfully!"});
            }
        }

    }catch(err){
        console.log(err);
    }
});


// product page verification
router.get('/products', authenticate, (req, res) => {
    res.send(req.rootUser);
});



module.exports = router;
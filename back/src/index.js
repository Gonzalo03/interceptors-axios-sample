const express = require('express');

const jwtProvider = require('./utils/jwt');

const config = require('../config');

const cors = require('cors');

const users = [
    {
        id: 1,
        username: 'user1',
        password: 'password1'
    },
    {
        id: 2,
        username: 'user2',
        password: 'password2'
    }
]

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


app.get('/get-auth-tokens', (req, res) => {

    const mockUser = users[0];

    const token = jwtProvider.createToken(mockUser);
    const refreshToken = jwtProvider.createRefreshToken(mockUser);

    res.json({
        token,
        refreshToken
    });

})

app.get('/users', (req, res) => {

    const token = req.headers.authorization?.split(' ')[1];


    try {
        jwtProvider.verifyToken(token, config.jwt.secret);
        return res.json(users);
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }



})


app.get('/refresh', (req, res) =>{
    const mockUser = users[0];
    const authRefreshToken = req.headers.authorization?.split(' ')[1];

    try {
        jwtProvider.verifyToken(authRefreshToken, config.jwt.refreshSecret)
        
        const token = jwtProvider.createToken(mockUser);
        const refreshToken = jwtProvider.createRefreshToken(mockUser);

       res.json({
            token
       })

    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'token expried'})
    }

})

app.listen(3001, () => {
    console.log('Listening on port 3001');
    }
);
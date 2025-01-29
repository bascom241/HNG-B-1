import express , {Express,Response,Request}  from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

// All Imports 

const app:Express = express();

// Configurations //
dotenv.config();
const corsOptions = {
    origin: 'http://example.com', 
    methods: 'GET', 
   
    credentials: true, 
  };


  app.use(cors(corsOptions))
  //

  // Logics //
  app.get('/api/vi/users', (req:Request,res:Response)=>{
    try{

  
    const response = {
        email:"abdulbasitabdulwahab21@gmail.com",
        current_datetime: new Date().toISOString(),
        gitHub_Url:"https://github.com/bascom241/"
    }

    res.status(200).json(response)
}catch(err){
    console.log(err)
    res.status(500).json({message: (err as Error).message})
}
    
  })


const port = process.env.PORT || 3000;
  app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
  })


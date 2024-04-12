import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
// import router from './router';

const app = express();

// Middleware
app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// Define routes
// app.use('/', router);
app.get('/',(req,res)=>{
    res.send("hlifsd");
});

// Create HTTP server
const server = http.createServer(app);

// Define port
const PORT = process.env.PORT || 8080;

// Start server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Connect to MongoDB
const MONGO_URL = 'mongodb+srv://utkarshk:HFzai05x4LwI4sLn@cluster0.mwegbdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.Promise = Promise;

async function DBConnect(req,res){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connected")
    }catch(err){
        console.log(err);
    }
}

DBConnect();

// mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle MongoDB connection errors
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

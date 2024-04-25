// import bodyParser from "body-parser";
// import express from "express";

// import mongoose from "mongoose";


// const app = express();

// mongoose.connect('mongodb+srv://abhidiva:%401Abhimongodb@cluster0.jy41f05.mongodb.net/command_system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.get('/', (req, res) =>{
//     console.log("alert hii");
//     res.send("hii abhi this side and you")
// })

// //define command schema
// const commandSchema = new mongoose.Schema({
//     name: String,
//     link: String,
// });

// const Command = mongoose.model('Command', commandSchema);

// //middleware
// app.use(bodyParser.json());

// //routes
// app.post('/commands', async(req, res) => {
//      try{
//         const {name, link} = req.body;
//         const command = new Command({name, link});
//         await command.save();
//         res.status(201).send(command);

//      } catch(error){
//         res.status(500).send(error);
//      }
// });

// //calling the command using get
// app.get('/commands/:name', async (req, res) => {
//     try {
//       const name = req.params.name;
//      const cmd =  await Command.findOne({ name });
      
//       if (!cmd) {
//         res.status(404).send('Command not found');
//         return;
//        } 
//       res.redirect(cmd.link);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });
  



// app.listen(8000);
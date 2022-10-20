import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import myUrlLogger from './src/tools/myUrlLogger.js';
import routes from './src/routes/routes.js';

dotenv.config();

const router = express();
router.use(cors());

router.use('/files', express.static('./files'));
router.use(bodyParser.json());
router.use(myUrlLogger);

// require("./src/tools/fileManager")(router);

const localHosting = () =>
  router.listen(process.env.SERVER_PORT, () => {
    console.log(`Server je pokrenut!`);
  });
localHosting();

router.use('/posts', routes.postsRoutes);

// router.post("/posts/")

// router.post('/posts/', (req, res) => {
//   res.send('POST request to the homepage');
// });

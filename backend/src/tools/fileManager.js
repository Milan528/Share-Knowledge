const multer = require("multer")
const path = require("path")
const db = require("./db")
const server = require("../config/server");
const fs = require("fs");
const { Console } = require("console");

const storage = multer.diskStorage({
    destination: server.storage, //nije relativna putanja u odnosu na ovaj file, nego u odnosu na app.js
    // destination: "files/", //ranije je pisalo ./files, ali radi i kao files/
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const fileManager = async (app) => {
    app.post("/uploadFile", upload.single("file"), async (req, res) => {
        let ext = req.file.filename.split(".");
        ext = ext[ext.length-1]

        let sql =`INSERT INTO file (path, ext, postId) `
        sql+=`VALUES ('${req.file.filename}', '${ext}', ${req.body.postId}); `

        const result = await db(sql)
        return res.json(result); 
    })

    app.get("/getFile", async (req, res) => {
        let filePath=req.query.filePath
        let splitResult = filePath.split("/");
        let fileName = splitResult[splitResult.length-1];
        filePath = "./"+server.storage+fileName

        // let filePath="../files/Darjan Drugarinovic CV.pdf"
        // let filePath="../files/1630585050554.docx"

        //****WAY 1*******
        let file = fs.createReadStream(filePath);
        file.pipe(res);

        //****WAY 2*******
        // res.download(filePath)
    })
}

const getFilesPaths = (files) => {
    return files.map((file, index) => ({path: server.adress + server.storage + file.path}))
}

const deleteFiles = (files) => {
    
    for (const file of files) {
        fs.unlink("files/" + file.path, err => {
            //   if (err) throw err; //ovako ne moze
            //   throw new Error('Go boom') //ovako moze, ali mozda ne treba, preuzeto sa frontenda
            console.log(err)
        });
    }
}



module.exports = fileManager;
module.exports.getFilesPaths = getFilesPaths;
module.exports.deleteFiles = deleteFiles;

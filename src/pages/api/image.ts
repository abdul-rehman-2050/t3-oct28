import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises"


export const config = {
    api:{
        bodyParser: false,
    }
}

const readFile = (req:NextApiRequest,saveLocally?:boolean ):Promise<{fields:formidable.Fields;files:formidable.Files}>=>{
    const options:formidable.Options = {};
    if(saveLocally){
        options.uploadDir = path.join(process.cwd(),"/public/new");
        options.maxFiles = 1;
        options.maxFileSize = 1024 * 100; //100KB;           
        options.filename = (name,ext,path,form)=>{
            return Date.now().toString() + "_"+path.originalFilename;            
        }
    }
    const form = formidable(options)
    return new Promise((resolve,reject)=>{
        form.parse(req,(err,fields,files)=>{
            if(err)reject(err)
            if(fields["gender"]){
                console.log(fields["gender"])
            }
            resolve({fields,files})
        })
    })
} 
const handler: NextApiHandler =async (req, res)=>{
    try{
        await fs.readdir(path.join(process.cwd()+"/public/new"))
    }catch(error){
        await fs.mkdir(path.join(process.cwd()+"/public/new"))
    }
    await readFile(req,true)
    res.status(200).json({
        data:"done",        
        error: null,
      });
    
}

export default handler;
import File from '../models/file.js'

export const uploadImage = async (req, res) => {
     const fileObj = {
       path: req.file.path,
        name: req.file.name,
    };
    console.log(fileObj)
    try {
        const file = await File.create(fileObj)
        console.log(file)
        res.status(200).json({ path : `http://localhost:3000/file/${ file._id }` })
    }
    catch (err)
    {
        console.error(err.message)
        res.status(500).json({ err : err.message })
    }
}

export const downloadImage = async (req, res) => {
    try {
        const file = File.findById(req.params.fileId)
        file.downloadContent++;

        await file.save();
        res.download(file.path, file.name);
    } catch (err)
    {
        console.log(err.message)
        return res.status(500).json({ error : err.message })
    }
}
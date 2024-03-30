const SD = require("../Model/Schema");
exports.UpdateController = async(req , res)=>{
    try{
        const {id} = req.params;
        const {name , Author} = req.body;
        //find from db
        const findByDb = await SD.findByIdAndUpdate({_id : id} , {name , Author});
        res.status(200).json({
            success:true,
            messagae:"data updated",
            data:findByDb
        })

    }catch{
        console.error("error in updater")
        res.status(500).json({
            success:false,
            messagae:"data not updated",
        })

    }

}
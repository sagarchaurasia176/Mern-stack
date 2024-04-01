const likeData = require('../Model/likes')

// exports the data first
exports.like = async (req, res) => {
    try {
        const { email } = req.body;
        //pass the data to the db
        const postSnd = await likeData.create({ email });
        res.status(200).json({
            success: true,
            message: "data is passed to db from the like page",
            data: postSnd,
        });
    } catch {
        console.log("error in post controller");
        res.status(500).json({
            success: true,
            message: "data is not passed to db check like page",
        });
    }
};

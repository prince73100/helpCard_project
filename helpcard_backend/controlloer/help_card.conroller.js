import { Helpcard } from "../models/help_card.model.js";

const handleCreatePost = async (req, res) => {
    try {
        const { title, description } = req.body
        if (title === "" && description === "") {
            return res.json({
                message: "Both field are require",
                status: 404
            })
        }
        const existhelpCard = await Helpcard.findOne({ title: title })
        if (existhelpCard) {
            return res.json({
                message: "This card is already exist",
                status: 404
            })
        }
        const helpCard = await Helpcard.create({
            title,
            description
        })

        if (!helpCard) {
            return res.json({
                message: "Help card is not added",
                status: 404
            })
        }
        res.status(200).json({
            message: "help card is created",
            status: 200
        })

    } catch (error) {
        return res.json({
            error: error.message,
            status: 500
        })
    }
}


const handlegetAllhelpCard = async (req, res) => {
    try {
        const allhelpCard = await Helpcard.find({})
        res.status(200).json({
            allhelpCard
        })
    } catch (error) {
        res.json({
            message: error.message,
            status: 500
        })
    }
}

const handle_help_card_basedon_title = async (req, res) => {
    try {
        const title = req.params.title
        const helpCard = await Helpcard.findOne({ title: title })
        if (!helpCard) {
            return res.json({
                message: "Enter valid title name or this is not exist",
                status: 404
            })
        }
        res.status(200).json({
            helpCard
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export {
    handleCreatePost,
    handlegetAllhelpCard,
    handle_help_card_basedon_title
}
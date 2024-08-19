import { Router } from "express";
import { handle_help_card_basedon_title, handleCreatePost, handlegetAllhelpCard } from "../controlloer/help_card.conroller.js";
const router = Router()

router.route('/createhelpcard').post(handleCreatePost)
router.route('/getAllhelpCard').get(handlegetAllhelpCard)
router.route('/gethelpcard/:title').get(handle_help_card_basedon_title)

export default router;
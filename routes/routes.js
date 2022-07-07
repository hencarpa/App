import express from "express"
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogController.js"
const router=express.Router()

router.get('/',getAllBlogs)
router.get('/',getBlog)
router.post('/:id',createBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

export default router
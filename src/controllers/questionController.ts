import { Request, Response } from "express";

import * as repositories from "../repositories/answerRepository.js"

export async function create(req: Request, res: Response) {
  const {question} = req. body

  await repositories.insertQuestion(question)

  res.status(200).send("question insert")
}

export async function answer(req: Request, res: Response) {
  const {answer}: {answer: string} = req.body
  const postId = parseInt(req.params.id)

  await repositories.insertComment(postId, answer)

  res.send("bala azul")

}

export async function get(req: Request, res: Response) {
  const posts = await repositories.selectPosts()

  res.send(posts)
}

export async function getById(req: Request, res: Response) {
  const postId = parseInt(req.params.id)
  const post = await repositories.selectPost(postId)

  res.send(post)
}

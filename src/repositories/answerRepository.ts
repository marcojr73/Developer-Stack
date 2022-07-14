// TODO
import { prisma } from "../config/database.js"

async function insertQuestion(question){
    await prisma.posts.create({
        data: {
            question: question
        }
    });
}


async function insertComment(postId, comment){
    await prisma.comments.create({
        data: {
            comment: comment,
            postId: postId
        }
    });
}

async function selectPost(id){
    return await prisma.posts.findUnique({
        where: {
            id
        },
        select: {
            question: true,
            Comments: {
                select: {
                    comment: true
                }
            }
        }
      })
}


async function selectPosts(){
    return await prisma.posts.findMany()
}

export{
    insertQuestion,
    insertComment,
    selectPost,
    selectPosts
}
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export const routes = Router()

routes.post("/", async (req, res) =>{
  const {firstName, lastName, age} = req.body

  const user = new User()
  user.firstName = firstName
  user.lastName = lastName
  user.age = age

  const users = await AppDataSource.manager.find(User)

  await AppDataSource.manager.save(user)

  res.json(users)
})


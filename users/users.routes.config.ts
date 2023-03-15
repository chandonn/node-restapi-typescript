import { CommonRoutesConfig } from "../common/common.routes.config"
import express from "express"

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  configureRoutes(): express.Application {
    
    this.app.route('/users')
    .get((req: express.Request, res: express.Response) => {
      res.status(200).send("List users")
    }).post((req: express.Request, res: express.Response) => {
      res.status(200).send("Create new users")
    })

    this.app.route('/users/userId')
    .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
      next()
    })
    .get((req: express.Request, res: express.Response) => {
      res.status(200).send(`get user profile data for user ${req.params.userId}`)
    })
    .put((req: express.Request, res: express.Response) => {
      res.status(200).send(`update all user profile data for user ${req.params.userId}`)
    })
    .patch((req: express.Request, res: express.Response) => {
      res.status(200).send(`update some user profile data for user ${req.params.userId}`)
    })
    .delete((req: express.Request, res: express.Response) => {
      res.status(200).send(`delete user profile for user ${req.params.userId}`)
    })
    
    return this.app
  }
}

import express from "express"

export abstract class CommonRoutesConfig {
  app: express.Application
  name: String

  constructor(app: express.Application, name: String) {
    this.app = app
    this.name = name
  }

  getName() {
    return this.name
  }

  abstract configureRoutes(): express.Application
}

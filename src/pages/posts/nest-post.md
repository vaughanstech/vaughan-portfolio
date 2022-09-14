---
layout: "../../templates/BasePost.astro"
title: Why I Use NestJS
description: Blog on why I chose the NestJS backend framework to create the Transformers API
pubDate: 2022-09-13T00:00:00Z
imgSrc: "/nest-logo-dark.png"
---

**Website**: [nestjs.com](https://nestjs.com/ "nestjs.com")

**Docs**: [docs.nestjs.com](https://docs.nestjs.com/ "docs.nestjs.com")

---

<h2 className="text-center">Table of Contents</h2>
<div className="text-center">
  <a href="#introduction">Introduction</a>
  <br>
  <a href="#working-with-nestjs">Working with NestJS</a>
  <br>
  <a href="#conclusion">Conclusion</a>
</div>

---

# Introduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since I described in my last post my go-to frontend framework that I used on my personal website. I would now like to take a moment, and talk about my go-to backend framework that I chose to use for one of my backend projects the **[Transformers API](https://github.com/vaughanstech/transformers-api "Transformers API")**.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NestJS is a backend framework whose main motto is _"A progressive Node.JS framework for building efficient, reliable and scalable server-side applications."_ A lot of people like to refer to NestJS as _Angular for the backend_ and rightfully so. It takes the Model, View, Controller (MVC) boilerplate code and transitions it into a backend framework that allows for easily scalable APIs. I was never a big fan of Angular as a frontend framework as it generates a **ton** of boilerplate code to do simple things and I regard it as more of an enterprise grade frontend framework, one that I see a lot of larger companies use for their larger scale apps.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although I do not enjoy Angular for its use of the MVC code style in the frontend, I really enjoy it in the backend, which NestJS has successfully done. Of course, it does still generate a lot of that boilerplate code that I'm afraid of in Angular, but I feel like it is a lot more necessary in the backend as when you are constructing a lot of the logic for a backend app it can become pretty confusing and hard to manage as the app grows in complexity.

# Working with NestJS

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What NestJS does, is it takes the MVC code style and applies it to each endpoint in an API. For example, you have Providers (or Services) that stores an endpoints main logic of the handling of data. Here you will do a lot of you database connection queries and response formatting. Take an example from the **Transformers API** where I created logic for each of the CRUD operations in the Autobots endpoint:

```typescript
import { Injectable } from "@nestjs/common";
import { Autobots, Prisma } from "@prisma/client";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class AutobotsService {
  constructor(private prisma: PrismaService) {}

  async autobot(
    autobotsWhereInput: Prisma.AutobotsWhereInput
  ): Promise<Autobots[] | null> {
    return this.prisma.autobots.findMany({
      where: autobotsWhereInput,
    });
  }

  async autobots(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AutobotsWhereUniqueInput;
    where?: Prisma.AutobotsWhereInput;
    orderBy?: Prisma.AutobotsOrderByWithRelationInput;
  }): Promise<Autobots[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.autobots.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAutobot(data: Prisma.AutobotsCreateInput): Promise<Autobots> {
    return this.prisma.autobots.create({
      data,
    });
  }

  async updateAutobot(params: {
    where: Prisma.AutobotsWhereUniqueInput;
    data: Prisma.AutobotsUpdateInput;
  }): Promise<Autobots> {
    const { where, data } = params;
    return this.prisma.autobots.update({
      data,
      where,
    });
  }

  async deleteAutobot(
    where: Prisma.AutobotsWhereUniqueInput
  ): Promise<Autobots> {
    return this.prisma.autobots.delete({
      where,
    });
  }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, let's take a look at the **Controller** for the Autobot endpoint. A Controller is where you create and specify your endpoints in NestJS. I really like this syntax as it makes it quite clear to see where your endpoints are located and what parameters they accept in order to perform some operation on the endpoint. Take a look at another example from the **Transformers API** where we send a GET request to retrieve an Autobot from the database.

```typescript
import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { Autobots } from '@prisma/client';
import { AutobotsService } from './autobots.service';

@Controller('autobots')
export class AutobotsController {
  constructor(private readonly autobotService: AutobotsService) {}

  @Get('/')
  async getAutobot(
    @Query('name') name: string,
    @Query('role') role: string,
    @Query('transforms_into') transforms_into: string,
    @Query('description') description: string,
    @Query('first_appearance_date') first_appearance_date: any,
    @Query('first_appearance') first_appearance: string,
  ) {
    if (first_appearance_date == String(first_appearance_date)) {
      return this.autobotService.autobot({
        name,
        role,
        transforms_into,
        description,
        first_appearance_date: Number(first_appearance_date),
        first_appearance,
      });
    } else {
      return this.autobotService.autobot({
        name,
        role,
        transforms_into,
        description,
        first_appearance_date,
        first_appearance,
      });
    }
  }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last important file you will need on each endpoint of an API is a Module. A module is where you bundle up your Provider and your Controller together an package it up to be exposed as an endpoint to the rest of the app. The syntax here is also very simple and easy to read as it shows what files are contained for a specific endpoint.

```typescript
import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AutobotsController } from "./autobots.controller";
import { AutobotsService } from "./autobots.service";

@Module({
  imports: [],
  controllers: [AutobotsController],
  providers: [AutobotsService, PrismaService],
})
export class AutobotsModule {}
```

^As you can see there's just over 10 lines of code here!

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now you may have noticed as I was demonstrating each file in the endpoint that **Prisma** has been following along. Prisma is a type or **Object Relational Manager (ORM)** that allows you to include your database mapping to your application in a relatively simple way. Prisma has the ability to create **Migrations**, which are different snapshots of your database and the tables it uses inside of your app. This makes it easy to make calls to your database as most common methods like CREATING, SEARCHING, and UPDATING in your database is created for you in Prisma. Now Prisma is not the only ORM that you can use in NestJS. In fact NestJS has support for most ORMs in the Node.JS landscape.

# Conclusion

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As you can see NestJS allows you to build efficient and syntactically pretty APIs in Node.JS. This makes it pretty simple for those who are looking to get into REST API development, who understand the fundamentals but don't know how to get started. I would even go as far to say that I believe that you should get your start in API development in NestJS rather than the popular ExpressJS framework as it will make you code a lot more readable. Don't just take it from me though, give it a shot for yourself. The NestJS docs are easily accessible and even more easy to read for someone looking to give the framework a test run. Make your way over to [dos.nestjs.com](https://docs.nestjs.com/ "docs.nestjs.com") and follow along with their **overview** section to start up your own NestJS app.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you would like to see a working example of a NestJS application then head over to my [Transformers API](https://github.com/vaughanstech/transformers-api "Transformers API") Project repo to have a closer look at some code, and if you are extra curious, take a look at a more detailed breakdown of the Transformers API with my [project post](http://localhost:3000/projects/transformer-api "project post").

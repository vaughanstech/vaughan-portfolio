---
layout: "../../templates/BasePost.astro"
title: Why I Use AstroJS
description: Blog on why I chose the AstroJS framework to create Vaughan's Tech website.
pubDate: 2022-09-03T00:00:00Z
imgSrc: "/astro-logo.png"
---

# Introduction

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astro prides itself in being an **all-in-one-framework for building fast**, content-focused websites. It's the first sentence when you load the _why Astro_ page on their webpage. To build webpages on the internet in the modern age, you pretty much have to use JavaScript, and there's no way of hiding from it. One of JavaScript's main criticisms, syntax aside, is its massive amount of frameworks that it has for front-end, back-end, and full-stack. For me, it was pretty overwhelming trying to find a framework that suited my needs and I spent countless hours on the internet scrolling through web development forums trying to find the best JavaScript framework for my site. This can quickly become exhausting as you will need to learn so many frameworks just to create one website and when you finally do decide on a framework and start building your website, sooner or later you will develop a bad case of **FOMO** (Fear of Missing Out) when a new shiny JS framework starts to show up.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Astro Framework attempts to get rid of all this framework churn by allowing you to be able to build websites using whatever front-end framework you want, where ever you want, while at the same time making it a pretty easy to use framework. This is coming from someone who never really has been big on front-end web development.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here is a link to my GitHub repository where I keep the code for Vaughan's Tech. While looking take note of how simple the syntax is to look at. For instance the home page (index.astro) looks like this:

```typescript
---
import Base from "../templates/Base.astro";
import { AppConfig } from "../utils/AppConfig";
import { Hero } from "../partials/Hero";
import { ProjectList } from "../partials/ProjectsList";
import { RecentPost } from "../partials/RecentPosts";
import type { IFrontmatter } from "astro-boilerplate-components";
import { sortByDate } from "../utils/Posts";

const allPosts = await Astro.glob<IFrontmatter>("./posts/*.md");
const sortedPosts = sortByDate(allPosts);
const lastThreePosts = sortedPosts.slice(0, 3);

const { title } = AppConfig;
const { description } = AppConfig;
---

<Base head={{ title, description }}>
    <Hero />
    <ProjectList />
    <RecentPost postList={lastThreePosts} />
</Base>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Towards the top of the file there is code inside of a block of three dashes(`---`). This is where all of the environment variables for the page will be stored, this includes imports and global variables. Below that is the structure of the actual page which is all split up in **React** components like **Heao**, **ProjectList**, and **RecentPost**. This keeps the main index page looking clean and tidy and keeps the ugly logic hidden away in the components, take a look at the **Hero** component:

```typescript
import {
  GradientText,
  HeroAvatar,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome to <GradientText>Vaughan's Tech</GradientText>
        </>
      }
      description={
        <>
          This is a portfolio site for{" "}
          <a className="text-cyan-400 hover:underline" href="/about">
            Michael Vaughan
          </a>
          . Feel free to explore all of my projects and interests
        </>
      }
      avatar={<></>}
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This component holds all of the code that will be displayed in the **Hero** component which will be displayed at the top of the index page, I've learned that keeping things in components is the best way to keep code clean and simple when coming back and looking back at a later time.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now you're probably wondering. "Well, if all you're going to be using is **React** components on your site, why not create the entire site using the **React** framework?" And to that question I'll respond at one of my biggest selling points as to why I am starting to love this framework even more. Which is its ability to utilize **Markdown** files to generate static content.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As I've mentioned before, I've never been good at web development, especially the design side of it. I am much more comfortable using using **Markdown** when creating styles on text files and with Astro, you can create a **Markdown** instance to use in your website to serve **Markdown** files. In fact I've written this whole blog post in **Markdown** take a look:

```markdown
---
layout: "../../templates/BasePost.astro"
title: Why I Use AstroJS
description: Blog on why I chose the AstroJS framework to create Vaughan's Tech website.
pubDate: 2022-09-03T00:00:00Z
imgSrc: "/astro-logo.png"
---

# Introduction

Astro prides itself in being an **all-in-one-framework for building fast**, content-focused websites. It's the first sentence when you load the _why Astro_ page on their webpage. To build webpages on the internet in the modern age, you pretty much have to use JavaScript, and there's no way of hiding from it. One of JavaScript's main criticisms, syntax aside, is its massive amount of frameworks that it has for front-end, back-end, and full-stack. For me, it was pretty overwhelming trying to find a framework that suited my needs and I spent countless hours on the internet scrolling through web development forums trying to find the best JavaScript framework for my site. This can quickly become exhausting as you will need to learn so many frameworks just to create one website and when you finally do decide on a framework and start building your website, sooner or later you will develop a bad case of **FOMO** (Fear of Missing Out) when a new shiny JS framework starts to show up.

The Astro Framework attempts to get rid of all this framework churn by allowing you to be able to build websites using whatever front-end framework you want, where ever you want, while at the same time making it a pretty easy to use framework. This is coming from someone who never really has been big on front-end web development.

Here is a link to my GitHub repository where I keep the code for Vaughan's Tech. While looking take note of how simple the syntax is to look at. For instance the home page (index.astro) looks like this:

This component holds all of the code that will be displayed in the **Hero** component which will be displayed at the top of the index page, I've learned that keeping things in components is the best way to keep code clean and simple when coming back and looking back at a later time.

Now you're probably wondering. "Well, if all you're going to be using is **React** components on your site, why not create the entire site using the **React** framework?" And to that question I'll respond at one of my biggest selling points as to why I am starting to love this framework even more. Which is its ability to utilize **Markdown** files to generate static content.

As I've mentioned before, I've never been good at web development, especially the design side of it. I am much more comfortable using using **Markdown** when creating styles on text files and with Astro, you can create a **Markdown** instance to use in your website to serve **Markdown** files. In fact I've written this whole blog post in **Markdown** take a look:
```

There is even more to the Astro framework that if I were to try to explain it all, you'd be reading all day. So my best advice to you or anyone who wants to get into web development but is afraid of all the big bad frameworks, is to check out the [Astro docs](https://docs.astro.build/en/getting-started/ "Astro docs") and startup a project yourself!

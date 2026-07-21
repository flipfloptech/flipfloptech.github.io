---
title: "Elon is right!"
description: "There is nothing you can't build with Fable and I think we are just scratching the surface."
date: "2026-07-21"
tags: ["development", "llm", "model", "claude", "fable", "anthropic", "opus"]
---

Elon recently admitted he was [wrong about Anthropic](https://x.com/elonmusk/status/2075278580955685036), calling them "obviously currently the leader in AI" and pointing out that no company has released a model as good as Mythos/Fable. After using Claude Fable for the last few weeks, I think he's right — we are almost at that point of replacing the traditional act of programming. No longer will we be writing code as much as writing specifications and validating/testing that code.

The paradigm shift is QA vs DEV. Anyone can have a great idea, but only a few will take the time needed to ensure it's implemented and tested correctly to 100% and durable enough for the 5 9s of uptime (99.999%).

It's still not perfect. I've yet to attempt anything malicious with it, but continually I am greeted with the following message when it was talking about its OWN persistent shell. 

`
The model provider refused to generate a response for this turn (content filter).

Provider explanation: This request triggered restrictions on violative cyber content and was blocked under Anthropic's Usage Policy. To learn more, see https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback. API integrators: you can reduce refusals for your users by configuring a fallback model — see https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback
`

However, it's generally been easy to defeat by just explaining that this isn't an offensive or defensive operation and we are simply working on an MCP server or FUSE filesystem.

And this isn't hypothetical. [squeezefs](https://github.com/flipfloptech/squeezefs), a FUSE filesystem, was built with Claude Fable. Its sibling [cortex-mcp](https://github.com/flipfloptech/cortex-mcp), an MCP server, was built on Claude Opus 4.7 and 4.8. Two real, shipped projects — the exact MCP server and FUSE filesystem I keep mentioning.

That said, Fable has tackled every challenge I've thrown at it that Opus couldn't handle.

Looking back, Claude Opus 4.8 Fast was the tell. It was the first time speed didn't come at the cost of quality — quick and sharp in the same breath. That combination was a peek into what Fable would become. If 4.8 Fast was the trailer, Fable is the feature.

If this is the floor, I can't imagine the ceiling. We're just scratching the surface — and I can't wait to see what the next release brings. I'll be first in line to try it.

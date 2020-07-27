# Webflow Collection Utilities

Library of utilities for adding additional functionality to Webflow CMS collections.

This package provides a set of helper functions that adds real-time interactivity to allow the user to dynamically sort, search and filter through a Webflow CMS collection.

## Purpose

If you want some sort of interaction between the user and a collection list in real-time then you'll quickly find that Webflow has no support, natively. Instead, you have to insert cumbersome code and add a load of extra classes and wrappers that you wouldn't need otherwise.

When researching, I found a few discussions and solutions the currently exist:

- [MixItUp3](https://webflow.com/blog/dynamic-filtering-and-sorting) by KunkaLabs. This seems to be the current standard, but as of writing it boasts a hefty ~60kb, hasn't been updated in almost three years and requires you to purchase a licence to use commercially.
- [Jetboost](https://www.jetboost.io/), an awesome piece of software that connects to your Webflow site over the Internet and provides searching and filtering. This is great, too, but still costs money to use and requires a fair amount of custom classes, embeds and code.
- [An article by @svishwakarma on Medium](https://medium.com/@svishwakarma/webflow-dynamic-dropdown-filtering-a-dynamic-text-element-9bb3ec8fe3b1) that uses jQuery for text filtering.
- [A three year-old idea on the Webflow Wishlist forum](https://wishlist.webflow.com/ideas/WEBFLOW-I-59) with over 2,000 total votes - obviously someone wants this feature.

These solutions are good, and you should use what works best for your business, but I wanted to develop a library with the express goals to:

- Be lightweight and performant,
- Be flexible enough to accomodate a wide range of use cases,
- Be simple to use, even for non-programmers, and
- Be completely free, even for commercial use.

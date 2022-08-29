# code-challenge-footprint

## Task for this technical test
Build a TypeScript React app with two views:

* A landing page listing and sorting categories with average carbon footprint per category (fetch transaction categories)

* A dynamic detail page per category (fetch transaction data)


## My comments

### Planning

Before I started, I planned how to achieve the code challenge. here are the steps I went through:

* I made some learning on TypeScript.
* I wrote a sketch of what I wanted it to look like, since no design was provided.
* I tested the endpoints with Postman.
* I built the folders structure in the repo.
* I tested the endpoints in the project, which lead to the CORS issue that I had to solve.
* I quickly decided to use Material UI so I did the styling all along the project.
* I did everything a little step at a time, to make sure everything was working and to detect bugs quickly, since I am very new to TypeScript, but also because I believe it's good practice.
* I added an error404 page and a loader that mimics the cards for a neat look (Skeleton component from Material UI).
* I added little details like the color for the footprint.

### Problems and solutions

1.
**Issue:** No prior knowledge of TypeScript

**Solution:** I started by reading and watching some material on TypeScript and React/TypeScript. I did some small tutorials but with the time I had, I couldn't find much to help me with this assignment, so I decided to jump in and try with the assignment directly. I also found a website that helped me for interface/type setup: https://beshanoe.github.io/json2ts/

**If I had more time:** Of course I would have pushed my learning even more.

2.
**Issue:** The API wouldn't fetch due to an issue with CORS.

**Solution:** I thought about adding JSON locally. But since the instructions were to fetch from an API and to show that I understand asynchronous programming, I went for another solution and found services online (I used JSONbin.io) where I could upload both JSON and use these URLs instead.

3.
**Issue:** Styling with Material UI.

**Solution:** I decided to use directly the Material UI components for their clean and minimalist styling, so hopefully I won't have so much more styling to do.

**If I had more time:** I would have try to make good use of much more possibilities of Material UI, since I used it only once before, and for a tiny project.

4.
**Issue:** Sorting the categories.

**Solution:** I decided to make it so the categories are alphabetically sorted by default, because the random order from the response could confuse the user who could wonder where this order comes from... I had some struggle with the useEffect hook (either too many renders if required dependencies, or warning of missing dependency if no dependency), but I read a bit about useCallback hook and used it in my AZ sorting function to fix this issue.

5.
**Issue:** Splitting in smaller components.

**Solution:** Since TypeScript is still very new to me, I struggle a bit to figure how to pass props/make interfaces, all the syntax about this, so at the moment I'm not able to make smaller components that would make my code more clean and reusable, but I'll keep trying until deadline.

**If I had more time:** Related to TypeScript knowledge, I would have read and try more.

6.

**Issue:** Nested fetch requests.

**Solution:** I had some issue with the loading combine to fetch, leading to NaN instead of numbers for average footprint in App, so I decided to nest the 2nd fetch request inside the 1st one so it doesn't interfere with setIsLoading.

**If I had more time:** I would have investigated for a cleaner way to do that, since it wouldn't be sustainable if I had multiple requests.


**Solution:** Since TypeScript is still very new to me, I struggle a bit to figure how to pass props/make interfaces, all the syntax about this, so at the moment I'm not able to make smaller components that would make my code more clean and reusable (and a bit more DRY), but I'll keep trying until deadline.

**If I had more time:** Related to TypeScript knowledge, I would have read and try more.

6.

**Issue:** Nested fetch requests.

**Solution:** I had some issue with the loading combine to fetch, leading to NaN instead of numbers for average footprint in App, so I decided to nest the 2nd fetch request inside the 1st one so it doesn't interfere with setIsLoading.

**If I had more time:** I would have investigated for a cleaner way to do that, since it wouldn't be sustainable if I had multiple requests.

7.

**Issue:** Handling state.

**Solution:** I wanted to use Redux, but I had many issues that I felt I couldn't solve with the time allocated so I decided to simply use the useState hook.

**If I had more time:** I would have found a solution for the transaction details that are expanded when clicking the subcategory arrow: they are all related to the same state, so they are all open or all closed. I would have been easier with Redux to then add a property "isExpanded" to each subcategory and to use it related to the onClick.



### Summary
-----

This project was fun to build. It was quite a challenge for me to use TypeScript to do it, but I feel that I've learned a lot from it. It was great to use Material UI since I didn't need to reinvent the wheel to have nice looking and minimalist little cards for all categories. It allowed me to focus more on understanding the differences between JavaScript and TypeScript, and to build this project in React/TypeScript.

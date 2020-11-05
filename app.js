const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

const homeStartingContent = " Home Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
const aboutContent = " About Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const contactContent = "Contact Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let posts = [];
let post

app.get("/", (req, res) => {
    res.render('home', { content: homeStartingContent, posts: posts });

})

app.get("/about", (req, res) => {
    res.render('about', { content: aboutContent })
})
app.get("/contact", (req, res) => {
    res.render('contact', { content: contactContent })
})
app.get("/compose", (req, res) => {
    res.render('compose')
})
app.post("/compose", (req, res) => {
    let post = {
        title: req.body.titleComposed,
        body: req.body.postComposed

    }
    posts.push(post);
    res.redirect("/");
})
app.get("/posts/:post", (req, res) => {
    posts.forEach(element => {
        if (_.kebabCase(element.title) === _.kebabCase(req.params.post))
            res.render('post', { title: element.title, content: element.body })

    })



})

app.listen(3000, () => {

})

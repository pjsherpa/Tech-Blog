const router = require("express").Router();
// this is being imported from the models folder
const { Blog, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");
const { route } = require("./api");

//GEt all blog for homepage

router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findall({
      include: [
        {
          model: BlogPost,
          attributes: ["filename", "decription"],
        },
      ],
    });
    const blogs = dbBlogData.map((blogpost) => blogpost.get({ plain }));
    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/blogs/:id", withAuth, async (req, res) => {
  try {
    //since model is not created the function finbyPk and findall not working.
    const dbBlogData = await Blog.findByPk();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

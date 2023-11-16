const controller = {};

controller.show = (req, res) => {
    let { emotions } = require("../data");

    res.locals.emotions = emotions;
    res.render("task1");
    // res.render("task", { emotions });
};
module.exports = controller;
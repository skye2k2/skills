
exports.index = function(req, res){
  res.render("_index", { title: "Clif's Showcase of Incredibly Ordinary Things" });
};

exports.overview = function(req, res){
  res.render("overview", { title: "Clif's Showcase of Incredibly Ordinary Things: Overview" });
};

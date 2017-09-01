
exports.index = function(req, res){
  res.render("_index", { title: "Clif's Showcase of Incredibly Ordinary Things" });
};

exports.overview = function(req, res){
  res.render("overview", { title: "Clif's Showcase of Incredibly Ordinary Things: Overview" });
};

exports.unknown = function(req, res){
  res.render("unknown", { title: "Clif's Showcase of Incredibly Ordinary Things: Unknown", path: req.path });
};

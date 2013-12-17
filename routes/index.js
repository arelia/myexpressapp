
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Whose Turn is it Anyway?' });
};
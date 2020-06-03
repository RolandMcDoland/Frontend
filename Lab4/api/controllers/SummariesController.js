/**
 * SummariesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list:function(req, res) {
    Summaries.find({}).exec(function(err, summaries){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.view('list', {summaries: summaries});
    });
  },
  add:function(req, res) {
    res.view('add');
  },
  create:function(req, res) {
    var title = req.body.title;
    var body = req.body.body;

    Summaries.create({title: title, body: body}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.redirect('/summaries/list');
    })
  },
  delete:function(req, res) {
    Summaries.destroy({id: req.params.id}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.redirect('/summaries/list');
    });
  },
  edit:function(req, res) {
    Summaries.findOne({id: req.params.id}).exec(function(err, summary){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.view('edit', {summary: summary});
    });
  },
  update:function(req, res) {
    var title = req.body.title;
    var body = req.body.body;

    Summaries.update({id: req.params.id}, {title: title, body: body}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.redirect('/summaries/list');
    })
  }
};


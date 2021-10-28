import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills, 
      error
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill, 
      error
    })
  })
}

function create(req, res) {
  skillsDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function deleteSkill(req, res) {
  skillsDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/skills')
  })
}

export{
  index,
  show,
  create,
  newSkill as new,
  deleteSkill as delete
}
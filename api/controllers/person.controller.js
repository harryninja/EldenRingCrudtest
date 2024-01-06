const db = require("../models");
const Pessoa = db.pessoas;
const Profissao = db.profissaos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

 if (!req.body.pes_nome) {
   res.status(400).send({
     message: "Nome cannot be empty!"
   });
   return;
 }

 const pessoa = {
   pes_nome: req.body.pes_nome,
   pes_data_nascimento: req.body.pes_data_nascimento,
   pes_cpf: req.body.pes_cpf,
   pes_telefone: req.body.pes_telefone,
   pes_observacoes: req.body.pes_observacoes,
   pes_prof_id: req.body.pes_prof_id
 };

 Pessoa.create(pessoa)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Pessoa."
     });
   });
};

exports.findAll = (req, res) => {
 Pessoa.findAll()
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving pessoas."
     });
   });
};

exports.findOne = (req, res) => {
 const id = req.params.id;

 Pessoa.findByPk(id)
   .then(data => {
     if (data) {
       res.send(data);
     } else {
       res.status(404).send({
         message: `Cannot find Pessoa with id=${id}.`
       });
     }
   })
   .catch(err => {
     res.status(500).send({
       message: "Error retrieving Pessoa with id=" + id
     });
   });
};

exports.update = (req, res) => {
 const id = req.params.id;

 Pessoa.update(req.body, {
   where: { id: id }
 })
   .then(num => {
     if (num == 1) {
       res.send({
         message: "Pessoa was updated successfully."
       });
     } else {
       res.send({
         message: `Cannot update Pessoa with id=${id}. Maybe Pessoa was not found or req.body is empty!`
       });
     }
   })
   .catch(err => {
     res.status(500).send({
       message: "Error updating Pessoa with id=" + id
     });
   });
};

exports.delete = (req, res) => {
 const id = req.params.id;

 Pessoa.destroy({
   where: { id: id }
 })
   .then(num => {
     if (num == 1) {
       res.send({
         message: "Pessoa was deleted successfully!"
       });
     } else {
       res.send({
         message: `Cannot delete Pessoa with id=${id}. Maybe Pessoa was not found!`
       });
     }
   })
   .catch(err => {
     res.status(500).send({
       message: "Could not delete Pessoa with id=" + id
     });
   });
};

exports.findAllProf = (req, res) => {
  Profissao.findAll()
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving profissaos."
     });
   });
 };
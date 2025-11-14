const personService = require("../services/personService");

exports.createPerson = async (req, res) => {
    try {
        const person = await personService.createPerson(req.body);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getPersonById = async (req, res) => {
    try {
        const person = await personService.getPerson(req.params.id);
        res.status(200).json(person);
    } catch (error) {
        if (Error === "Person not found") {
            res.status(404).json({error: error.message});
        }
        res.status(500).json({error: error.message});
    }
};

exports.updatePerson = async (req, res) => {
    try{
        const person = await personService.updatePerson(req.params.id, req.body);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deletePerson = async (req, res) => {
    try {
        const person = await personService.deletePerson(req.params.id);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getAllPerson = async (req, res) => {
    try {
        const persons = await personService.getAllPersons();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};




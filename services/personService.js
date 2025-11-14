const Person = require("../models/person");

exports.createPerson = async (data) => {
    const person = new Person(data);
    await person.save();
    return person;
};

exports.updatePerson = async (id, data) => {
    const person = await Person.findByIdAndUpdate(id, data, { new: true });
    if (!person) {
        throw new Error("Person not found");
    }
    return person;
};

exports.deletePerson = async (id) => {
    const person = await Person.findByIdAndDelete(id)
    if (!person) {
        throw new Error("Person not found");
    }
    return person;
};

exports.getPerson = async (id) => {
    const person = await Person.findById(id)
    if (!person) {
        throw new Error("Person not found");
    }
    return person;
};

exports.getAllPersons = async () => {
    const person = await Person.find();
    return person;
};

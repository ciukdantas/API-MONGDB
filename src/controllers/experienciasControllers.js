const experienciasRepository = require("../repositories/experienciasRepository");

exports.getExperiencias = async (req, res) => {
    const experiencias = await experienciasRepository.getAllExperiencias();
    res.json(experiencias);
};

exports.getAllExperienciasById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencias = await experienciasRepository.getExperienciaById(id);
    res.json(experiencias);
}

exports.createExperiencia = async (req, res) => {
    const experiencia = req.body;
    const newexperiencia = await experienciasRepository.createExperiencia(experiencia);
    res.json(newexperiencia);
}

exports.updateExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updatedexperiencia = await experienciasRepository.updateExperiencia(id, experiencia);
    res.json(updatedexperiencia);
}

exports.deleteExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    await experienciasRepository.deleteExperiencia(id);
    res.json({ message: `Experiencia ${id} deleted` });
}
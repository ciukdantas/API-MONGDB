const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes();
    res.json(informacoes);
}

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newInformacoes = await informacoesRepository.createInformacoes(informacoes);
    res.json(newInformacoes);
}

exports.upedateInformacoes = async (req, res) => {
    const informacoes = req.body;
    const result = await informacoesRepository.updateInformacoes(informacoes);
    res.json(result);
}

exports.deleteInformacoes = async (req, res) => {
   const result = await informacoesRepository.deleteInformacoes();
    res.json({ message: `informacoes deleted` });
}
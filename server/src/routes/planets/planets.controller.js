import { planets } from '../../models/planets.model.js';

export const getAllPlanets = (req, res) => {
    res.status(200).json(planets);
};


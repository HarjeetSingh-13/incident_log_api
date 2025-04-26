import { Router } from 'express';
import { RequestHandler } from 'express';
import { 
    getAllIncidents, 
    createIncident, 
    getIncidentById, 
    deleteIncident 
} from '../controllers/incidentsController';

const router = Router();

router.get('/', getAllIncidents as RequestHandler);
router.post('/', createIncident as RequestHandler);
router.get('/:id', getIncidentById as RequestHandler);
router.delete('/:id', deleteIncident as RequestHandler);

export default router;
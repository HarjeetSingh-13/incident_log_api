import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Incident, { SeverityLevel } from '../model/Indident';

export const getAllIncidents = async (req: Request, res: Response) => {
  try {
      const incidents = await Incident.find();
      res.status(200).json(incidents);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching incidents', error });
  }
};

export const createIncident = async (req: Request, res: Response) => {
  const { title, description, severity } = req.body;

  if (!title || !description || !severity) {
      return res.status(400).json({ message: 'All fields are required' });
  }

  if (!Object.values(SeverityLevel).includes(severity)) {
      return res.status(400).json({ message: 'Invalid severity level' });
  }

  try {
      const newIncident = new Incident({ title, description, severity });
      await newIncident.save();
      res.status(201).json(newIncident);
  } catch (error) {
      res.status(500).json({ message: 'Error creating incident', error });
  }
};

export const getIncidentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid incident ID' });
  }

  try {
      const incident = await Incident.findById(id);
      if (!incident) {
          return res.status(404).json({ message: 'Incident not found' });
      }
      res.status(200).json(incident);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching incident'});
  }
};

export const deleteIncident = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid incident ID' });
  }

  try {
      const incident = await Incident.findByIdAndDelete(id);
      if (!incident) {
          return res.status(404).json({ message: 'Incident not found' });
      }
      res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error deleting incident'});
  }
};

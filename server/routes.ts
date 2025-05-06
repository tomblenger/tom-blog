import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic portfolio API routes - add as needed
  
  // Get portfolio data route
  app.get('/api/portfolio', (req, res) => {
    const portfolioData = {
      name: "Alex Thompson",
      title: "Frontend Developer",
      about: {
        bio: "I'm a Frontend Developer with 5+ years of experience creating modern web applications. My journey in web development started during college where I built my first React project.",
        currentRole: "Currently, I'm focused on building accessible, human-centered products at TechInnovate Inc, where I work on enterprise SaaS solutions."
      }
    };
    
    res.json(portfolioData);
  });

  const httpServer = createServer(app);

  return httpServer;
}

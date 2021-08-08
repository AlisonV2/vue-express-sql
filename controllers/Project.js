import Project from "../models/Project.js";
 
// Get all project
export const getProjects = async (req, res) => {
    try {
        const project = await Project.findAll();
        res.send(project);
    } catch (err) {
        console.log(err);
    }
}
 
// Get project by id
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(project[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new project
export const createProject = async (req, res) => {
    try {
        await Project.create(req.body);
        res.json({
            "message": "Project Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update project by id
export const updateProject = async (req, res) => {
    try {
        await Project.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Project Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete project by id
export const deleteProject = async (req, res) => {
    try {
        await Project.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Project Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
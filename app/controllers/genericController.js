const genericController = (model, associations = [], foreignKeys = []) => {
    return {
        // Create
        create: async (req, res) => {
            try {
                if (req.body.image && req.body.image_type) {
                    const imageBuffer = Buffer.from(req.body.image, 'base64'); // Decodes Base64 image
                    req.body.image = imageBuffer; // Stores as Buffer
                }

                // Assigns foreign keys from route parameters to the request body
                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        req.body[key] = req.params[key];
                    }
                });

                const record = await model.create(req.body);
                res.status(201).json(record);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        // Get All
        getAll: async (req, res) => {
            try {
                const query = { include: associations, where: {} };

                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });

                const records = await model.findAll(query);

                records.forEach(record => {
                    if (record.image && record.image_type) {
                        record.image = `data:${record.image_type};base64,${record.image.toString('base64')}`; // Image Handling
                    }
                });

                res.status(200).json(records);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        // Get by Id
        getById: async (req, res) => {
            try {
                const query = { include: associations, where: { id: req.params.id } };

                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });

                const record = await model.findOne(query);
                if (record) {
                    if (record.image && record.image_type) {
                        record.image = `data:${record.image_type};base64,${record.image.toString('base64')}`; // Image Handling
                    }
                    res.status(200).json(record);
                } else {
                    res.status(404).json({ error: 'Record not found' });
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        // Update
        update: async (req, res) => {
            try {
                if (req.body.image && req.body.image_type) {
                    req.body.image = Buffer.from(req.body.image, 'base64'); // Base64 to Buffer for images
                }

                const query = { where: { id: req.params.id } };

                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });

                const [updated] = await model.update(req.body, query);
                if (updated) {
                    const updatedRecord = await model.findOne({
                        where: { id: req.params.id },
                        include: associations,
                    });

                    if (updatedRecord.image && updatedRecord.image_type) {
                        updatedRecord.image = `data:${updatedRecord.image_type};base64,${updatedRecord.image.toString('base64')}`;
                    }
                    res.status(200).json(updatedRecord);
                } else {
                    res.status(404).json({ error: 'Record not found' });
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        // Delete
        delete: async (req, res) => {
            try {
                const query = { where: { id: req.params.id } };

                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });

                const deleted = await model.destroy(query);
                if (deleted) {
                    res.status(200).json({ message: 'Record deleted successfully' });
                } else {
                    res.status(404).json({ error: 'Record not found' });
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },

        // Delete All
        deleteAll: async (req, res) => {
            try {
                const query = { where: {} };

                foreignKeys.forEach((key) => {
                    if (req.params[key]) {
                        query.where[key] = req.params[key];
                    }
                });

                const deletedCount = await model.destroy(query);
                res.status(200).json({ message: `${deletedCount} records deleted.` });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
    };
};

module.exports = genericController;

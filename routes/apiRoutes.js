const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', async (req, res) => {
    try {
        const notes = await store.getNotes();

        return res.json(notes);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/notes', async (req, res) => {
    try {
        const newNotes = await store.setNotes(req.body);

        res.json(newNotes);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/notes/;id', async (req, res) => {
    try {
        store.deleteNote(req.params.id);

    } catch (err) {
        res.status(500).json(err)
    }

    res.json({ ok: true });
});

module.export = router;
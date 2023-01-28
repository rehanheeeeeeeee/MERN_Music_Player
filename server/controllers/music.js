const getMuic = (req, res) => {
  try {
    res.status(202).json({ success: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

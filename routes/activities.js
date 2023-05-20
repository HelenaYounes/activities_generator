export const list = (req, res) => {
  res.json([]);
};

export const create = (req, res) => {
  const { name, type } = req.body;
  console.log(`${name} and ${type} received`);
  res.send("ok create");
};

export const read = (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "playdoh", type: "motricity" });
};

export const update = (req, res) => {
  const { id } = req.params;
  const { name, type } = req.body;
  console.log(`updating ${id} with ${name} and ${type}`)
  res.send("ok update");
};

export const deleteActivity = (req, res) => {
  const {id} = req.params;
  console.log(`deleted activity ${id}`);
  res.send("ok delete");
};

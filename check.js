export default function handler(req, res) {

  const users = {
    "demo_user": { status: "active" },
    "blocked_user": { status: "blocked" }
  };

  const id = req.query.id;

  if (!users[id]) {
    return res.json({ status: "blocked" });
  }

  return res.json(users[id]);
}
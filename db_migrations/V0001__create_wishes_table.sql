CREATE TABLE t_p86187819_birthday_website_pro.wishes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  session_id TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
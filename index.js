const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')


const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'your_password_here',
    database:'elearning',

})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.post('/register', (req, res) => {
    const { username, name, password } = req.body;
    
    db.query('INSERT INTO Users (username, name, password) VALUES (?, ?, ?)', [username, name, password], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Server error');
        } else {
            res.send('Registration successful!');
        }
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Server error' });
        }

        if (results.length > 0) {
            const userId = results[0].user_id;
            res.json({ success: true, user_id: userId });
        } else {
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.get('/get_relation', (req, res) => {
  const { user_id, course_id, count } = req.query;

  if(!user_id || !course_id || !count) {
    return res.status(400).json({ success: false, message: 'Required parameters are missing.' });
  }

  db.query(
    'SELECT * FROM relation_users_courses WHERE user_id = ? AND course_id = ? AND count > ?',
    [user_id, course_id, count],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      if (results.length > 0) {
        console.log(results)
        res.json({ success: true, data: results[0] }); // Sending the first matching result
      } else {
        res.json({ success: false, message: 'Data not found' });
      }
    }
  );
});



app.put('/update_relation', (req, res) => {
  const { user_id, course_id, count } = req.body;

  db.query(
    'UPDATE relation_users_courses SET count = ? WHERE user_id = ? AND course_id = ?',
    [count, user_id, course_id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      if (results.affectedRows > 0) {
        res.json({ success: true, message: 'Data updated successfully' });
      } else {
        res.json({ success: false, message: 'No data updated' });
      }
    }
  );
});

app.post('/insert_relation', (req, res) => {
  const { user_id, course_id, count } = req.body;

  // First, check if the combination already exists
  db.query(
    'SELECT * FROM relation_users_courses WHERE user_id = ? AND course_id = ?',
    [user_id, course_id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      // If the combination exists, send an appropriate message or handle as needed
      if (results.length > 0) {
        console.log("User id and course id exists");
        return res.status(200).json({ success: false, message: 'Combination of user_id and course_id already exists' });
      }

      // If the combination doesn't exist, proceed to insert
      db.query(
        'INSERT INTO relation_users_courses (user_id, course_id, count) VALUES (?, ?, ?)',
        [user_id, course_id, count],
        (insertError, insertResults) => {
          if (insertError) {
            console.error(insertError);
            return res.status(500).json({ success: false, message: 'Server error' });
          }

          res.json({ success: true, message: 'Data inserted successfully' });
        }
      );
    }
  );
});



app.listen(3001,()=>{
    console.log("HI Hello World");
})



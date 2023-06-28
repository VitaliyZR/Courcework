const sql = require('mssql/msnodesqlv8');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const config = {
  server: "DESKTOP-E5OAD0L\\SQLEXPRESS",
  database: "rentalBuying",
  options: {
    trustedConnection: true,
  },
};

app.get('/clients', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM clients', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});

app.post('/clients', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('first_name', sql.VarChar, req.body.first_name);
    request.input('last_name', sql.VarChar, req.body.last_name);
    request.input('email', sql.VarChar, req.body.email);
    request.input('phone', sql.VarChar, req.body.phone);
    request.query('INSERT INTO clients (first_name, last_name, email, phone) VALUES (@first_name, @last_name, @email, @phone)',
      function(err, recordset) {
        if (err) {
          console.log('Error executing query:', err);
          return;
        }
        res.send('Client added successfully!');
      });
  });
});

app.get('/property-cities', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM property_city', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});

app.post('/property-cities', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('name', sql.VarChar, req.body.name);
    request.query('INSERT INTO property_city (name) VALUES (@name)', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send('Property city added successfully!');
    });
  });
});

app.get('/property-status', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM property_status', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});

app.post('/property-status', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('status_name', sql.VarChar, req.body.status_name);
    request.query('INSERT INTO property_status (status_name) VALUES (@status_name)', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send('Property status added successfully!');
    });
  });
});

app.get('/properties', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM properties', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});

app.post('/properties', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('address', sql.VarChar, req.body.address);
    request.input('property_city_id', sql.Int, req.body.property_city_id);
    request.input('area', sql.Decimal(10, 2), req.body.area);
    request.input('number_of_rooms', sql.Int, req.body.number_of_rooms);
    request.input('property_status_id', sql.Int, req.body.property_status_id);
    request.query('INSERT INTO properties (address, property_city_id, area, number_of_rooms, property_status_id) VALUES (@address, @property_city_id, @area, @number_of_rooms, @property_status_id)', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send('Property added successfully!');
    });
  });
});

app.get('/agents', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM agents', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});

app.post('/agents', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('first_name', sql.VarChar, req.body.first_name);
    request.input('last_name', sql.VarChar, req.body.last_name);
    request.input('email', sql.VarChar, req.body.email);
    request.input('phone', sql.VarChar, req.body.phone);
    request.query('INSERT INTO agents (first_name, last_name, email, phone) VALUES (@first_name, @last_name, @email, @phone)', 
      function(err, recordset) {
        if (err) {
          console.log('Error executing query:', err);
          return;
        }
        res.send('Agent added successfully!');
      });
  });
});


app.get('/advertisements', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM advertisements', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});

app.post('/advertisements', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('property_id', sql.Int, req.body.property_id);
    request.input('agent_id', sql.Int, req.body.agent_id);
    request.input('seller_id', sql.Int, req.body.seller_id);
    request.input('description', sql.VarChar, req.body.description);
    request.input('date_posted', sql.Date, req.body.date_posted);
    request.query('INSERT INTO advertisements (property_id, agent_id, seller_id, description, date_posted) VALUES (@property_id, @agent_id, @seller_id, @description, @date_posted)',
      function(err, recordset) {
        if (err) {
          console.log('Error executing query:', err);
          return;
        }
        res.send('Advertisement added successfully!');
      });
  });
});

app.get('/selected_items', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.query('SELECT * FROM selected_items', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send(recordset.recordsets);
    });
  });
});
app.post('/selected_items', function(req, res) {
  sql.connect(config, function(err) {
    if (err) {
      console.log('Error connecting to database:', err);
      return;
    }
    var request = new sql.Request();
    request.input('invoice_id', sql.Int, req.body.invoice_id);
    request.input('article_id', sql.Int, req.body.article_id);
    request.input('item_quantity', sql.Int, req.body.item_quantity);
    request.query('INSERT INTO selected_items (invoice_id, article_id, item_quantity) VALUES (@invoice_id, @article_id, @item_quantity)', function(err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
        return;
      }
      res.send('Selected item added successfully!');
    });
  });
});

app.get('/rental-contracts', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM rental_contracts');
    res.send(result.recordsets);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving rental contracts from database.');
  }
});

app.post('/rental-contracts', async (req, res) => {
  const { advertisements_id, buyer_id, start_date, end_date, price_per_month } = req.body;
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('advertisements_id', sql.Int, advertisements_id)
      .input('buyer_id', sql.Int, buyer_id)
      .input('start_date', sql.Date, start_date)
      .input('end_date', sql.Date, end_date)
      .input('price_per_month', sql.Decimal(10, 2), price_per_month)
      .query(
        `INSERT INTO rental_contracts (advertisements_id, buyer_id, start_date, end_date, price_per_month)
         VALUES (@advertisements_id, @buyer_id, @start_date, @end_date, @price_per_month)`
      );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding rental contract to database.');
  }
});

app.get('/sales-deals', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM sales_deals');
    res.send(result.recordsets);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving sales deals from the database.');
  }
});

app.post('/sales-deals', async (req, res) => {
  const { advertisements_id, buyer_id, date, price } = req.body;
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('advertisements_id', sql.Int, advertisements_id)
      .input('buyer_id', sql.Int, buyer_id)
      .input('date', sql.Date, date)
      .input('price', sql.Decimal(10, 2), price)
      .query(
        `INSERT INTO sales_deals (advertisements_id, buyer_id, date, price)
         VALUES (@advertisements_id, @buyer_id, @date, @price)`
      );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding sales deal to the database.');
  }
});

const server = app.listen(3000, () => {
  console.log('Server is running..');
});

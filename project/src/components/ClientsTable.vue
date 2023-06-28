<template>
  <div class="clients-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Email</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in clients" :key="item.client_id">
          <td>{{ item.client_id }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
        </tr>
        <tr>
          <td>
            <button @click="addClient" class="add-button">Додати</button>
          </td>
          <td>
            <input type="text" v-model="newClientFirstName" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newClientLastName" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newClientEmail" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newClientPhone" class="input-field" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clients: [],
      newClientFirstName: '',
      newClientLastName: '',
      newClientEmail: '',
      newClientPhone: ''
    }
  },
  mounted() {
    this.getClients();
  },
  methods: {
    addClient() {
      axios.post('http://localhost:3000/clients', {
        first_name: this.newClientFirstName,
        last_name: this.newClientLastName,
        email: this.newClientEmail,
        phone: this.newClientPhone
      })
      .then(response => {
        console.log(response.data);
        this.getClients();
        this.newClientFirstName = '';
        this.newClientLastName = '';
        this.newClientEmail = '';
        this.newClientPhone = '';
      })
      .catch(error => {
        console.log(error);
      });
    },
    getClients() {
      axios.get('http://localhost:3000/clients')
      .then(response => {
        this.clients = response.data[0];
        console.log(this.clients)
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.clients-table {
  margin-top: 20px;
}
table {
  border-collapse: separate;
  border-spacing: 0;
  width: 1400px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  color: #333;
}
thead {
  background-color: #4CAF50;
  color: #fff;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
th {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 16px;
}
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
tbody tr:hover {
  background-color: #ddd;
}
tbody td::before {
  content: attr(data-label);
  float: left;
  font-weight: bold;
  text-transform: uppercase;
}
.input-field {
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}
.add-button {
  padding: 6px 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-button:hover {
  background-color: #45a049;
}
</style>
  
<template>
  <div class="agents-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="agent in agents" :key="agent.agent_id">
          <td>{{ agent.agent_id }}</td>
          <td>{{ agent.first_name }}</td>
          <td>{{ agent.last_name }}</td>
          <td>{{ agent.email }}</td>
          <td>{{ agent.phone }}</td>
        </tr>
        <tr>
          <td>
            <button @click="addAgent" class="add-button">Додати</button>
          </td>
          <td>
            <input type="text" v-model="newAgentFirstName" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newAgentLastName" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newAgentEmail" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newAgentPhone" class="input-field" />
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
      agents: [],
      newAgentFirstName: '',
      newAgentLastName: '',
      newAgentEmail: '',
      newAgentPhone: ''
    };
  },
  mounted() {
    this.getAgents();
  },
  methods: {
    addAgent() {
      axios
        .post('http://localhost:3000/agents', {
          first_name: this.newAgentFirstName,
          last_name: this.newAgentLastName,
          email: this.newAgentEmail,
          phone: this.newAgentPhone
        })
        .then(response => {
          console.log(response.data);
          this.getAgents();
          this.newAgentFirstName = '';
          this.newAgentLastName = '';
          this.newAgentEmail = '';
          this.newAgentPhone = '';
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAgents() {
      axios
        .get('http://localhost:3000/agents')
        .then(response => {
          this.agents = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.agents-table {
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
  
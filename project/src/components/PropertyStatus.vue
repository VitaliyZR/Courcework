<template>
  <div class="property-status-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in propertyStatuses" :key="item.property_status_id">
          <td>
            {{ item.property_status_id }}
          </td>
          <td>
            {{ item.status_name }}
          </td>
        </tr>
        <tr>
          <td>
            <button @click="addPropertyStatus" class="add-button">Додати</button>
          </td>
          <td>
            <input type="text" v-model="newPropertyStatusName" class="input-field" />
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
      propertyStatuses: [],
      newPropertyStatusName: '',
    };
  },
  mounted() {
    this.getPropertyStatuses();
  },
  methods: {
    addPropertyStatus() {
      axios
        .post('http://localhost:3000/property-status', {
          status_name: this.newPropertyStatusName,
        })
        .then(response => {
          console.log(response.data);
          this.getPropertyStatuses();
          this.newPropertyStatusName = '';
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPropertyStatuses() {
      axios
        .get('http://localhost:3000/property-status')
        .then(response => {
          this.propertyStatuses = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.property-status-table {
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
  
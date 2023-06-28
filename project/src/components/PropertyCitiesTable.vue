<template>
  <div class="property-cities-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in propertyCities" :key="item.property_city_id">
          <td>
            {{ item.property_city_id }}
          </td>
          <td>
            {{ item.name }}
          </td>
        </tr>
        <tr>
          <td>
            <button @click="addPropertyCity" class="add-button">Додати</button>
          </td>
          <td>
            <input type="text" v-model="newPropertyCityName" class="input-field" />
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
      propertyCities: [],
      newPropertyCityName: '',
    };
  },
  mounted() {
    this.getPropertyCities();
  },
  methods: {
    addPropertyCity() {
      axios
        .post('http://localhost:3000/property-cities', {
          name: this.newPropertyCityName,
        })
        .then(response => {
          console.log(response.data);
          this.getPropertyCities();
          this.newPropertyCityName = '';
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPropertyCities() {
      axios
        .get('http://localhost:3000/property-cities')
        .then(response => {
          this.propertyCities = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.property-cities-table {
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
  
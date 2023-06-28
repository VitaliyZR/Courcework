<template>
  <div class="properties-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Address</th>
          <th>City ID</th>
          <th>Area</th>
          <th>Number of Rooms</th>
          <th>Status ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in properties" :key="item.property_id">
          <td>{{ item.property_id }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.property_city_id }}</td>
          <td>{{ item.area }}</td>
          <td>{{ item.number_of_rooms }}</td>
          <td>{{ item.property_status_id }}</td>
        </tr>
        <tr>
          <td>
            <button @click="addProperty" class="add-button">Додати</button>
          </td>
          <td>
            <input type="text" v-model="newAddress" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newCityID" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newArea" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newNumberOfRooms" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newStatusID" class="input-field" />
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
      properties: [],
      newAddress: '',
      newCityID: null,
      newArea: null,
      newNumberOfRooms: null,
      newStatusID: null
    };
  },
  mounted() {
    this.getProperties();
  },
  methods: {
    addProperty() {
      axios
        .post('http://localhost:3000/properties', {
          address: this.newAddress,
          property_city_id: this.newCityID,
          area: this.newArea,
          number_of_rooms: this.newNumberOfRooms,
          property_status_id: this.newStatusID
        })
        .then(response => {
          console.log(response.data);
          this.getProperties();
          this.newAddress = '';
          this.newCityID = null;
          this.newArea = null;
          this.newNumberOfRooms = null;
          this.newStatusID = null;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getProperties() {
      axios
        .get('http://localhost:3000/properties')
        .then(response => {
          this.properties = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.properties-table {
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
  
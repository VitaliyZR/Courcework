<template>
  <div class="advertisements-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Property ID</th>
          <th>Agent ID</th>
          <th>Seller ID</th>
          <th>Description</th>
          <th>Date Posted</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="advertisement in advertisements" :key="advertisement.ad_id">
          <td>{{ advertisement.ad_id }}</td>
          <td>{{ advertisement.property_id }}</td>
          <td>{{ advertisement.agent_id }}</td>
          <td>{{ advertisement.seller_id }}</td>
          <td>{{ advertisement.description }}</td>
          <td>{{ formatDate(advertisement.date_posted) }}</td>
        </tr>
        <tr>
          <td>
            <button @click="addAdvertisement" class="add-button">Додати</button>
          </td>
          <td>
            <input type="number" v-model="newPropertyID" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newAgentID" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newSellerID" class="input-field" />
          </td>
          <td>
            <input type="text" v-model="newDescription" class="input-field" />
          </td>
          <td>
            <input type="date" v-model="newDatePosted" class="input-field" />
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
      advertisements: [],
      newPropertyID: null,
      newAgentID: null,
      newSellerID: null,
      newDescription: '',
      newDatePosted: ''
    };
  },
  mounted() {
    this.getAdvertisements();
  },
  methods: {
    addAdvertisement() {
      axios
        .post('http://localhost:3000/advertisements', {
          property_id: this.newPropertyID,
          agent_id: this.newAgentID,
          seller_id: this.newSellerID,
          description: this.newDescription,
          date_posted: this.newDatePosted
        })
        .then(response => {
          console.log(response.data);
          this.getAdvertisements();
          this.newPropertyID = null;
          this.newAgentID = null;
          this.newSellerID = null;
          this.newDescription = '';
          this.newDatePosted = '';
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAdvertisements() {
      axios
        .get('http://localhost:3000/advertisements')
        .then(response => {
          this.advertisements = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(date) {
      const formattedDate = new Date(date).toISOString().split('T')[0];
      return formattedDate;
    }
  }
};
</script>

<style scoped>
.advertisements-table {
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
  
<template>
  <div class="rental-contracts-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Advertisement ID</th>
          <th>Buyer ID</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Price per Month</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contract in rentalContracts" :key="contract.contract_id">
          <td>{{ contract.contract_id }}</td>
          <td>{{ contract.advertisements_id }}</td>
          <td>{{ contract.buyer_id }}</td>
          <td>{{ formatDate(contract.start_date) }}</td>
          <td>{{ formatDate(contract.end_date) }}</td>
          <td>{{ contract.price_per_month }}</td>
        </tr>
        <tr>
          <td>
            <button @click="addRentalContract" class="add-button">Додати</button>
          </td>
          <td>
            <input type="number" v-model="newAdvertisementID" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newBuyerID" class="input-field" />
          </td>
          <td>
            <input type="date" v-model="newStartDate" class="input-field" />
          </td>
          <td>
            <input type="date" v-model="newEndDate" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newPricePerMonth" class="input-field" />
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
      rentalContracts: [],
      newAdvertisementID: null,
      newBuyerID: null,
      newStartDate: '',
      newEndDate: '',
      newPricePerMonth: null
    };
  },
  mounted() {
    this.getRentalContracts();
  },
  methods: {
    addRentalContract() {
      axios
        .post('http://localhost:3000/rental-contracts', {
          advertisements_id: this.newAdvertisementID,
          buyer_id: this.newBuyerID,
          start_date: this.newStartDate,
          end_date: this.newEndDate,
          price_per_month: this.newPricePerMonth
        })
        .then(response => {
          console.log(response.data);
          this.getRentalContracts();
          this.newAdvertisementID = null;
          this.newBuyerID = null;
          this.newStartDate = '';
          this.newEndDate = '';
          this.newPricePerMonth = null;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getRentalContracts() {
      axios
        .get('http://localhost:3000/rental-contracts')
        .then(response => {
          this.rentalContracts = response.data[0];
          console.log(this.rentalContracts)
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(date) {
      return new Date(date).toISOString().split('T')[0];
    }
  }
};
</script>

<style scoped>
.rental-contracts-table {
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
  
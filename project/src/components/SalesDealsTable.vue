<template>
  <div class="sales-deals-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Advertisement ID</th>
          <th>Buyer ID</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="deal in salesDeals" :key="deal.deal_id">
          <td>{{ deal.deal_id }}</td>
          <td>{{ deal.advertisements_id }}</td>
          <td>{{ deal.buyer_id }}</td>
          <td>{{ formatDate(deal.date) }}</td>
          <td>{{ deal.price }}</td>
        </tr>
        <tr>
          <td>
            <button @click="addSalesDeal" class="add-button">Додати</button>
          </td>
          <td>
            <input type="number" v-model="newAdvertisementID" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newBuyerID" class="input-field" />
          </td>
          <td>
            <input type="date" v-model="newDate" class="input-field" />
          </td>
          <td>
            <input type="number" v-model="newPrice" class="input-field" />
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
      salesDeals: [],
      newAdvertisementID: null,
      newBuyerID: null,
      newDate: '',
      newPrice: null
    };
  },
  mounted() {
    this.getSalesDeals();
  },
  methods: {
    addSalesDeal() {
      axios
        .post('http://localhost:3000/sales-deals', {
          advertisements_id: this.newAdvertisementID,
          buyer_id: this.newBuyerID,
          date: this.newDate,
          price: this.newPrice
        })
        .then(response => {
          console.log(response.data);
          this.getSalesDeals();
          this.newAdvertisementID = null;
          this.newBuyerID = null;
          this.newDate = '';
          this.newPrice = null;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getSalesDeals() {
      axios
        .get('http://localhost:3000/sales-deals')
        .then(response => {
          this.salesDeals = response.data[0];
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
.sales-deals-table {
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
.select-field {
  width: 60px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
.select-field option {
  font-size: 14px;
  padding: 4px;
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
  
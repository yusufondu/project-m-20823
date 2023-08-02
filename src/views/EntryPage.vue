<template>
  <div id="entry">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="header" v-for="header in headers" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in cars" :key="car.ID">
            <td class="header">{{ car.ID }}</td>
            <td class="header">{{ car.CARID }}</td>
            <td class="header">{{ car.INSTOCK ? "YES" : "NO" }}</td>
            <td class="header">{{ car.HP }} HP</td>
            <td class="header">{{ formatPrice(car.PRICE) }}₺</td>
            <td class="header">{{ car.COLOR }}</td>
            <td class="header">
              <router-link :to="{ name: 'edit', params: { id: car.ID } }">
                <button>Edit</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import mockData from "@/mock/api.js";

export default {
  name: "EntryPage",
  data() {
    return {
      cars: null,
      headers: ["ID", "CARID", "INSTOCK", "HP", "PRICE", "COLOR"],
    };
  },
  methods: {
    formatPrice(price) {
      return parseFloat(price).toLocaleString("tr-TR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },

  created() {
    const storedCars = JSON.parse(localStorage.getItem("cars"));
    if (storedCars) {
      this.cars = storedCars;
    } else {
      this.cars = mockData;
      localStorage.setItem("cars", JSON.stringify(this.cars));
    }
  },
};
</script>

<style>
#entry {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  height: 50vh;
}

table {
  border: 1px solid #f5f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px 20px 10px 20px;
  text-align: left;
}

table:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.header {
  padding: 0 20px 10px 0;
}

button {
  background-color: #1da1e2;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.table-container {
  overflow-x: auto;
  max-width: 600px;
}

@media (max-width: 650px) {
  .table-container {
    overflow-x: auto;
    max-width: 500px;
  }
}

@media (max-width: 500px) {
  .table-container {
    overflow-x: auto;
    max-width: 320px;
  }
}
</style>

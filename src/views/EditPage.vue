<template>
  <div id="edit">
    <form>
      <div class="form-section">
        <label>ID:</label>
        <span>{{ car.ID }}</span>
      </div>

      <div class="form-section">
        <label>CARID:</label>
        <span>{{ car.CARID }}</span>
      </div>

      <div class="form-section">
        <label>INSTOCK:</label>
        <input type="checkbox" v-model="car.INSTOCK" />
      </div>

      <div class="form-section">
        <label>HORSE POWER:</label>
        <input type="number" v-model="car.HP" min="100" max="550" />
      </div>

      <div class="form-section">
        <label>PRICE:</label>
        <input type="number" v-model="car.PRICE" />
      </div>

      <div class="form-section">
        <label>COLOR:</label>
        <div class="color-picker">
          <div v-for="color in colors" :key="color">
            <input type="radio" v-model="car.COLOR" :value="color" />
            {{ color }}
          </div>
        </div>
      </div>

      <div class="button-section">
        <button class="btn-cancel" @click="cancel">Cancel</button>
        <button @click="save" :disabled="!isChanged">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import mockData from "@/mock/api.js";

export default {
  name: "EditPage",
  data() {
    return {
      car: null,
      originalCar: null,
      colors: ["Red", "Blue", "Green", "Yellow", "Black", "White"],
    };
  },
  created() {
    const carId = parseInt(this.$route.params.id);
    this.car =
      JSON.parse(localStorage.getItem("cars"))[carId - 1] ||
      mockData.find((car) => car.ID === carId);
    this.originalCar = { ...this.car };
  },
  computed: {
    isChanged() {
      return JSON.stringify(this.car) !== JSON.stringify(this.originalCar);
    },
  },
  methods: {
    cancel() {
      this.$router.push({ name: "entry" });
    },
    save() {
      this.originalCar = { ...this.car };

      const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
      const updatedCars = storedCars.map((car) => {
        if (car.ID === this.originalCar.ID) {
          return this.originalCar;
        }
        return car;
      });

      localStorage.setItem("cars", JSON.stringify(updatedCars));
      this.$router.push({ name: "entry" });
    },
  },
};
</script>

<style>
#edit {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  min-width: 274px;
  height: 50vh;
}

form {
  border: 1px solid #f5f5f5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  padding: 20px 20px 10px 20px;
  text-align: left;
}

form:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.form-section {
  padding: 0 20px 10px 0;
}

label {
  padding-right: 20px;
}

.button-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 10px 0;
}

.btn-cancel {
  margin-right: 10px;
}

.color-picker {
  display: flex;
  flex-direction: row;
}
</style>

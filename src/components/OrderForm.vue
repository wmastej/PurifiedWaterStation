<template>
  <div class="order-form">
    <form @submit.prevent="handleSubmit" class="flex flex-wrap items-end gap-4">
      <div class="field w-20 flex-shrink-0">
        <label for="no" class="block mb-2 font-medium">No.</label>
        <InputText
          id="no"
          v-model="formData.no"
          placeholder="No."
          class="w-full"
        />
      </div>

      <div class="field w-96 flex-shrink-0">
        <label for="customerName" class="block mb-2 font-medium">Customer Name</label>
        <InputText
          id="customerName"
          v-model="formData.customerName"
          placeholder="Enter customer name"
          class="w-full"
        />
      </div>

      <div class="field w-32 flex-shrink-0">
        <label for="regularGallon" class="block mb-2 font-medium">Regular Gallon</label>
        <InputNumber
          id="regularGallon"
          v-model="formData.regularGallon"
          :min="0"
          :maxFractionDigits="2"
          placeholder="Enter amount"
          class="w-full"
        />
      </div>

      <div class="field w-32 flex-shrink-0">
        <label for="promoGallon" class="block mb-2 font-medium">Promo Gallon</label>
        <InputNumber
          id="promoGallon"
          v-model="formData.promoGallon"
          :min="0"
          :maxFractionDigits="2"
          placeholder="Enter amount"
          class="w-full"
        />
      </div>

      <div class="field flex-shrink-0">
        <Button
          type="submit"
          label="Order"
          icon="pi pi-shopping-cart"
        />
      </div>
    </form>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

export default {
  name: 'OrderForm',
  components: {
    InputText,
    InputNumber,
    Button
  },
  data() {
    return {
      formData: {
        no: '',
        customerName: '',
        regularGallon: null,
        promoGallon: null
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Order submitted:', this.formData);
      // Add your order submission logic here
      // You can emit an event or call an API
    }
  }
};
</script>

<style scoped>
.order-form {
  width: 100%;
}

.field {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 0;
}

.field :deep(.p-inputnumber),
.field :deep(.p-inputtext),
.field :deep(.p-inputnumber-input),
.field :deep(.p-inputnumber-input-wrapper) {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box;
}
</style>


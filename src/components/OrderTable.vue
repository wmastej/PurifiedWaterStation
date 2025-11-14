<template>
  <div class="order-table">
    <DataTable
      :value="orders"
      :paginator="true"
      :rows="10"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      responsiveLayout="scroll"
      class="p-datatable-sm"
    >
      <Column field="no" header="No." :sortable="false" style="min-width: 80px">
        <template #body="slotProps">
          {{ slotProps.data.no }}
        </template>
      </Column>
      <Column field="customerName" header="Customer Name" :sortable="true" style="min-width: 200px">
        <template #body="slotProps">
          {{ slotProps.data.customerName }}
        </template>
      </Column>
      <Column field="orderDate" header="Order Date" :sortable="true" style="min-width: 150px">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.orderDate) }}
        </template>
      </Column>
      <Column
        field="regularGallon"
        header="Regular Gallon"
        :sortable="true"
        style="min-width: 150px"
      >
        <template #body="slotProps">
          {{ formatNumber(slotProps.data.regularGallon) }}
        </template>
      </Column>
      <Column field="promoGallon" header="Promo Gallon" :sortable="true" style="min-width: 150px">
        <template #body="slotProps">
          {{ formatNumber(slotProps.data.promoGallon) }}
        </template>
      </Column>
      <Column field="amountPaid" header="Amount Paid" :sortable="true" style="min-width: 150px">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.amountPaid) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "OrderTable",
  components: {
    DataTable,
    Column,
  },

  computed: {
    orders() {
      return this.$store.getters.getAllOrders;
    },
  },
  methods: {
    addNewOrder(order) {
      this.$store.dispatch("addOrder", order);
    },

    formatNumber(value) {
      if (value === null || value === undefined) return "0.00";
      return parseFloat(value).toFixed(2);
    },
    formatCurrency(value) {
      if (value === null || value === undefined) return "$0.00";
      return "$" + parseFloat(value).toFixed(2);
    },
    formatDate(value) {
      if (!value) return "";
      const date = new Date(value);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },

  data() {
    return {
      // orders: [
      //   // Sample data - you can replace this with data from props or API
      //   {
      //     no: "1",
      //     customerName: "John Doe",
      //     orderDate: new Date("2024-01-16"),
      //     regularGallon: 5.5,
      //     promoGallon: 2.0,
      //     amountPaid: 150.0,
      //   },
      //   {
      //     no: "1",
      //     customerName: "Jane Smith",
      //     orderDate: new Date("2024-01-15"),
      //     regularGallon: 10.0,
      //     promoGallon: 0,
      //     amountPaid: 250.0,
      //   },
      //   {
      //     no: "1",
      //     customerName: "Bob Johnson",
      //     orderDate: new Date("2024-01-14"),
      //     regularGallon: 3.5,
      //     promoGallon: 1.5,
      //     amountPaid: 100.0,
      //   },
      // ],
    };
  },
};
</script>

<style scoped>
.order-table {
  width: 100%;
  margin-top: 2rem;
}
</style>

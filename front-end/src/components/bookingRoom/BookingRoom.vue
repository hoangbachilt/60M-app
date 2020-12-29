<template>
  <div>
    sdasd
  </div>
</template>

<script>
import axios from "axios"
import { mapActions } from 'vuex'
import authHeader from '../../services/auth-header'

export default {
  data() {
    return {
      seatBookings: [],
      errors: []
    };
  },
  created() {
    axios
    .get("http://localhost:3000/seat_bookings", { headers: authHeader() })
    .then(response => {
      this.seat_bookings = response.data
    })
  },
  mounted() {
    ...mapActions(['bookingSeats']),
  }
};
</script>

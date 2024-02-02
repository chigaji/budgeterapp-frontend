<template>
  <div class="registration-container">
    <div class="registration-form">
      <h2>Registration</h2>
      <br>
      <form @submit.prevent="register">
        <div class="form-group">
          <v-text-field
            id="username"
            v-model="username"
            label="Username"
            variant="outlined"
            type="text"
            required
          />
          <v-text-field
            id="password"
            v-model="password"
            label="Password"
            variant="outlined"
            type="password"
            required
          />

          <button type="submit">
            <template v-if="loading">
              <v-progress-circular
                indeterminate
                color="white"
                size="24"
              />
            </template>
            <span v-else>Register</span>
          </button>
        </div>
      </form>
      <div v-if="result">
        <v-alert
          v-model="result"
          type="error"
          closable
          icon="$error"
          text="Registration Faild"
          variant="tonal"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      result: false,
      loading: false
    };
  },
  methods: {
    async register() {
      this.loading = true
      console.log(`${this.username} , ${this.password}`)
      // Perform registration logic here
      try {
        const response = await fetch('http://localhost:1323/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        })

        if (response.ok) {
          console.log(response)
          this.$router.push('/login')
        } else {
          console.error('Registration failed')
        }
      } catch (error) {
        console.error('Error:', error)
      } finally {
        this.loading = false
      }

    }
  }
}
</script>

<style scoped>
.registration-container {
  max-width: 720px;
  margin: 0 auto;
}

.registration-form {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

/* label {
  font-weight: bold;
} */

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  /* padding: 10px 20px; */
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 0;
  /* Increase button height */
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}
</style>
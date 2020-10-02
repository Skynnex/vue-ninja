<template>
  <Alert v-if="registrationFailed" variant="danger" dismissible @dismissed="registrationFailed = false">
    Try again with another login.
  </Alert>
  <form @submit.prevent="register()">
    <div class="form-group">
      <label :class="{ 'text-danger': errors.login && dirty.login }" for="login">Login</label>
      <div class="invalid-feedback d-block" v-if="errors.login && dirty.login">The login is required</div>
      <input
        type="text"
        id="login"
        name="login"
        :class="{ 'form-control': true, 'is-invalid': errors.login && dirty.login }"
        v-model="userModel.login"
        @input.once="dirty.login = true"
      />
    </div>
    <div class="form-group">
      <label :class="{ 'text-danger': errors.password && dirty.password }" for="password">Password</label>
      <div class="invalid-feedback d-block" v-if="errors.password && dirty.password">The password is required</div>
      <input
        type="password"
        :class="{ 'form-control': true, 'is-invalid': errors.password && dirty.password }"
        id="password"
        v-model="userModel.password"
        @input.once="dirty.password = true"
      />
    </div>
    <div class="form-group">
      <label :class="{ 'text-danger': errors.birthYear && dirty.birthYear }" for="birthYear">Birth year</label>
      <div class="invalid-feedback d-block" v-if="errors.birthYear && dirty.birthYear">The birth year is required</div>
      <input
        type="number"
        :class="{ 'form-control': true, 'is-invalid': errors.birthYear && dirty.birthYear }"
        id="birthYear"
        v-model.number="userModel.birthYear"
        @input.once="dirty.birthYear = true"
      />
    </div>
    <button type="submit" class="btn btn-primary" id="registerButton" :disabled="Object.keys(errors).length > 0">Let's go</button>
  </form>
</template>

<script lang="ts">
import { UserModel } from '@/models/UserModel';
import { useUserService } from '@/composables/UserService';
import { defineComponent, reactive, computed, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Register',
  setup() {
    const userModel = reactive({
      login: '',
      password: '',
      birthYear: new Date().getFullYear() - 18
    }) as UserModel;

    const errors = computed(() => {
      const errors: Partial<Record<keyof UserModel, boolean>> = {};

      if (!userModel.login) {
        errors.login = true;
      }
      if (!userModel.password) {
        errors.password = true;
      }
      if (!userModel.birthYear) {
        errors.birthYear = true;
      }
      return errors;
    });

    const dirty = reactive<{ [K in keyof UserModel]: boolean }>({
      login: false,
      password: false,
      birthYear: false
    });

    const userService = useUserService();
    const registrationFailed = ref(false);
    const router = useRouter();

    async function register() {
      try {
        await userService.register(userModel);
        router.push({ name: 'home' });
      } catch (e) {
        registrationFailed.value = true;
      }
    }

    return {
      userModel,
      register,
      errors,
      dirty,
      registrationFailed
    };
  }
});
</script>

<style lang="css" scoped></style>

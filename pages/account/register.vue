<script setup>
import { reset } from "@formkit/core";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Register` : 'Register';
  }
})

const isPasswordValid = ref(false);
const isEmptyPassword = ref(true);
const hasMinLength = ref(false);
const hasUpperCase = ref(false);
const hasLowerCase = ref(false);
const hasDigit = ref(false);
const hasSpecialChar = ref(false);

const validatePassword = (value) => {
  hasMinLength.value = value.length >= 8;
  hasUpperCase.value = /[A-Z]/.test(value);
  hasLowerCase.value = /[a-z]/.test(value);
  hasDigit.value = /\d/.test(value);
  hasSpecialChar.value = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  isEmptyPassword.value = value.length === 0;

  isPasswordValid.value =
    hasMinLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
};

const handleSubmit = async (data) => {
  if (!isPasswordValid) return;
  const {image, ...payload} = data;
  const body = new FormData();
  const [file] = image
  body.append('image', file)
  for(const key in payload){
    body.append(key, payload[key]);
  }
    reset("register-form");
};
const handleIconClick = (node, e) => {
  node.props.suffixIcon = node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
  node.props.type = node.props.type === "password" ? "text" : "password";
};
</script>
<template>
  <div class="my-32 w-96 mx-auto">
    <h1 class="text-center text-2xl font-bold mb-5">Account</h1>
    <FormKit
      type="form"
      @submit="handleSubmit"
      submit-label="Register"
      id="register-form"
    >
      <FormKit
        type="text"
        label="Name"
        name="name"
        validation="required"
        placeholder="Enter your name..."
      />
      <FormKit
        type="text"
        label="Email"
        name="email"
        validation="required|email"
        placeholder="Enter your email..."
      />
      <FormKit
        type="password"
        label="Password"
        name="password"
        validation="required"
        placeholder="Enter your password..."
        suffix-icon="eyeClosed"
        minlength="8"
        @input="validatePassword"
        @suffix-icon-click="handleIconClick"
      />
      <template v-if="!isEmptyPassword">
        <div class="flex flex-col pb-4">
          <span class="formkit-message" v-if="!hasMinLength"
            >Password must be at least 8 characters long.</span
          >
          <span class="formkit-message" v-if="!hasUpperCase"
            >Password must contain at least one uppercase letter.</span
          >
          <span class="formkit-message" v-if="!hasLowerCase"
            >Password must contain at least one lowercase letter.</span
          >
          <span class="formkit-message" v-if="!hasDigit"
            >Password must contain at least one digit.</span
          >
          <span class="formkit-message" v-if="!hasSpecialChar"
            >Password must contain at least one special character.</span
          >
        </div>
      </template>
      <FormKit
        type="password"
        label="Confirm password"
        name="confirmPassword"
        validation="required|confirm:password"
        validation-visibility="live"
        validation-label="Confirm password"
        placeholder="Confirm your password..."
        suffix-icon="eyeClosed"
        minlength="8"
        @suffix-icon-click="handleIconClick"
      />
      <FormKit
        type="file"
        label="Profile image"
        name="image"
        accept="image/*"
        validation="required"
      />
    </FormKit>

    <i class="text-gray-700 text-sm">
      Already have an Account?
      <NuxtLink href="/account/login" class="text-blue-500 hover:text-blue-700">Login</NuxtLink>
    </i>
  </div>
</template>

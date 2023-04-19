<template>
    <svg
      :width="size"
      :height="size"
      :viewBox="`0 0 ${size} ${size}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use :href="'#' + icon"></use>
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      size: {
        type: [Number, String],
        default: 24,
      },
      icon: {
        type: String,
        default: "",
        required: true,
      },
    },
  };
  </script>
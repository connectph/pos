<script setup>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  // composable
  import * as AllIcons from '@/composable/useIcons'

  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })

  library.add(AllIcons)
</script>

<template>
  <FontAwesomeIcon :icon="props.name"/>
</template>
<script setup>
  import { onMounted, ref } from 'vue'
  import ApexCharts from 'apexcharts'

  const props = defineProps({
    type: {
      type: String,
      required: true
    }
  })

  const element = ref(null)
  const options = ref({})

  onMounted(() => {
    options.value = {
      chart: {
        height: 280,
        type: props.type,
        width: 280,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      // colors: ['#546E7A', '#E91E63'],
      tooltip: {
        enabled: true,
        x: {
          show: false
        }
      },
      subtitle: {
        text: 'Test chart',
        floating: true,
        offsetX: 20,
        offsetY: 50,
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: undefined,
          color: '#9699a2'
        }
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        // colors: ['red', 'green'],
        width: 4,
        dashArray: 0, 
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 35, 19, 23, 15]
        }
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: .8,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        },
        min: 0,
        max: 100
      }
    }

    new ApexCharts(element.value, options.value).render()
  })
</script>

<template>
  <div ref="element"></div>
</template>
<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';

const getGeolocation = async (): Promise<LatLngTuple> => {
  return new Promise<LatLngTuple>((res) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      res([
        coords.latitude,
        coords.longitude,
      ]);
    }, () => res(warsawCenter));
  });
};

const mapRef = useTemplateRef('map');

const markerCords = defineModel<LatLngTuple>('cords', {
  default: warsawCenter,
});

onMounted(async () => {
  if (!mapRef.value) return;

  const L = await import('leaflet');
  const center = await getGeolocation();
  markerCords.value = center;

  const map = L.map(mapRef.value, {
    center,
    zoom: 13,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors',
  }).addTo(map);

  const marker = L.marker(markerCords.value).addTo(map);
  watch(markerCords, (cords) => {
    marker.setLatLng(cords);
  });

  map.on('click', (e) => {
    markerCords.value = [
      e.latlng.lat,
      e.latlng.lng,
    ];
  });
});
</script>

<template>
  <div
    ref="map"
    class="size-full rounded-lg"
  />
</template>

<style scoped>

</style>

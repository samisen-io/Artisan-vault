  <template>
  <div>
    <div v-for="(item, index) in photos" :key="index">
      <div @click="imgClick(item)" style="cursor: pointer">
        <img :src="item.thumbnail" />
      </div>
      <vmodal v-if="item.show" @close="item.show = false">
        <div slot="body">
          <img :src="item.thumbnail" :class="`img-index--${index}`" />
        </div>
      </vmodal>
    </div>
  </div>
</template>
<script>
import vmodal from 'vue-js-modal'
export default {
  props: {
    items: { type: Array, default: () => [] },
  },
  data() {
    return {
      photos: {},
    };
  },
  created() {
    this.photos = this.items.map((item) => {
      return { ...item, show: false };
    });
  },
  methods: {
    imgClick(item) {
      item.show = true;
    },
  },
  components: {
    vmodal: vmodal,
  },
};
</script>
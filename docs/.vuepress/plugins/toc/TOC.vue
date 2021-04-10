<template>
  <div class="toc">
    <div class="toc__main" v-show="!isCollapse">
      <slot name="header" />
      <HeaderList :items="groupedHeaders" :list-type="listTypes" />
      <slot name="footer" />
    </div>
    <div class="toc__footer" @click="onToggleCollapse">
      <div class="toc__bar">
        <span v-if="isCollapse">
          <svg
            t="1617800019199"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1162"
          >
            <path
              d="M192 443.733333c-38.4 0-68.266667 29.866667-68.266667 68.266667 0 38.4 29.866667 68.266667 68.266667 68.266667s68.266667-29.866667 68.266667-68.266667c0-38.4-29.866667-68.266667-68.266667-68.266667zM512 443.733333c-38.4 0-68.266667 29.866667-68.266667 68.266667 0 38.4 29.866667 68.266667 68.266667 68.266667s68.266667-29.866667 68.266667-68.266667c0-38.4-29.866667-68.266667-68.266667-68.266667zM832 443.733333c-38.4 0-68.266667 29.866667-68.266667 68.266667 0 38.4 29.866667 68.266667 68.266667 68.266667s68.266667-29.866667 68.266667-68.266667c0-38.4-34.133333-68.266667-68.266667-68.266667z"
              p-id="1163"
            ></path>
          </svg>
        </span>
        <span v-else
          ><svg
            t="1617800118336"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1919"
          >
            <path
              d="M853.333 247.467H170.667c-17.067 0-34.134-17.067-34.134-34.134S153.6 179.2 170.667 179.2h682.666c17.067 0 34.134 17.067 34.134 34.133s-17.067 34.134-34.134 34.134z m0 298.666H170.667c-17.067 0-34.134-17.066-34.134-34.133s17.067-34.133 34.134-34.133h682.666c17.067 0 34.134 17.066 34.134 34.133s-17.067 34.133-34.134 34.133z m0 298.667H170.667c-17.067 0-34.134-17.067-34.134-34.133s17.067-34.134 34.134-34.134h682.666c17.067 0 34.134 17.067 34.134 34.134S870.4 844.8 853.333 844.8z"
              p-id="1920"
            ></path></svg
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderList from './HeaderList.vue'
export default {
  props: {
    listType: {
      type: [String, Array],
      default: 'ul',
    },
    includeLevel: {
      type: Array,
      default: () => [2, 3],
    },
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  components: { HeaderList },
  computed: {
    listTypes() {
      return typeof this.listType === 'string' ? [this.listType] : this.listType
    },
    groupedHeaders() {
      console.log('list', this.groupHeaders(this.$page.headers).list)
      return this.groupHeaders(this.$page.headers).list
    },
  },
  methods: {
    groupHeaders(headers, startLevel = 1) {
      const list = []
      let index = 0
      while (index < headers.length) {
        const header = headers[index]
        if (header.level < startLevel) break
        if (header.level > startLevel) {
          const result = this.groupHeaders(headers.slice(index), header.level)
          if (list.length) {
            list[list.length - 1].children = result.list
          } else {
            list.push(...result.list)
          }
          index += result.index
        } else {
          if (header.level <= this.includeLevel[1] && header.level >= this.includeLevel[0]) {
            list.push({ ...header })
          }
          index += 1
        }
      }
      return { list, index }
    },
    onToggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
  },
}
</script>

<style scoped>
/* 更改全局样式 */
/deep/ .page,
/deep/ .page-edit,
/deep/.page-nav {
  max-width: 1200px;
}
.toc {
  position: fixed;
  right: 10px;
  top: 30vh;
  max-width: 200px;
  min-width: 30px;
  min-height: 30px;
}
.toc /deep/ ul,
.toc /deep/ li {
  list-style: none;
}
.toc__main {
  min-width: 150px;
  font-size: 14px;
}
.toc__footer {
  height: 40px;
  max-width: 150px;
  width: 100%;
  background-color: #f3f4f5;
  line-height: 40px;
  cursor: pointer;
  border-radius: 5px;
}
.toc__bar {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  width: 30px;
  height: 30px;
}
.toc__bar svg {
  width: 100%;
  height: 100%;
}
@media (max-width: 419px) {
  .toc {
    right: 20px;
    top: 30vh;
  }
}
</style>
